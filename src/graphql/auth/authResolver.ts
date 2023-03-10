import cookie from 'cookie';
import validator from 'validator';
import bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import {
  LoginResult,
  InvalidInputError,
  InvalidFieldError,
  Resolvers,
  InvalidCredentialsError,
  SignupResult
} from '../graphqlTypes';
import { createAuthToken } from '../../utils/jwtHelper.js';

export const authResolver: Resolvers = {
  Query: {
    login: async (_, { input }, context): Promise<LoginResult> => {
      const invalidInputError: InvalidInputError = {
        __typename: 'InvalidInputError',
        message: 'Invalid input arguments',
        invalidFields: []
      };

      const { email, password } = input;

      //Check if email and password are provided
      if (!email) {
        invalidInputError.invalidFields.push({
          __typename: 'InvalidFieldError',
          field: 'email',
          message: 'Email is required'
        } as InvalidFieldError);
      }
      if (!password) {
        invalidInputError.invalidFields.push({
          __typename: 'InvalidFieldError',
          field: 'password',
          message: 'Password is required'
        } as InvalidFieldError);
      }

      if (hasInvalidFields(invalidInputError)) {
        return invalidInputError;
      }

      //Check if email is valid
      if (!validator.isEmail(email)) {
        invalidInputError.invalidFields.push({
          __typename: 'InvalidFieldError',
          field: 'email',
          message: 'Email is invalid'
        });
      }

      if (hasInvalidFields(invalidInputError)) {
        return invalidInputError;
      }

      //Check if user exists
      const user: User | null = await context.prisma.user.findUnique({
        where: {
          email: email
        }
      });

      if (!user) {
        return {
          __typename: 'InvalidCredentialsError',
          message: 'Invalid credentials'
        } as InvalidCredentialsError;
      }

      //Check if password is correct
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return {
          __typename: 'InvalidCredentialsError',
          message: 'Invalid credentials'
        } as InvalidCredentialsError;
      }

      //Generate token
      const authToken = createAuthToken(user.id);
      context.res.setHeader('Set-Cookie', cookie.serialize('authToken', authToken), {
        httpOnly: true,
        sameSite: 'strict',
        secure: true,
        maxAge: 8600
      });

      //Return User
      return user;
    }
  },

  Mutation: {
    signup: async (_, { input }, context): Promise<SignupResult> => {
      const invalidInputError: InvalidInputError = {
        __typename: 'InvalidInputError',
        message: 'Invalid input arguments',
        invalidFields: []
      };

      const { email, password, firstname, lastname } = input;

      //Check if all inputs are provided
      if (!email) {
        invalidInputError.invalidFields.push({
          __typename: 'InvalidFieldError',
          field: 'email',
          message: 'Email is required'
        } as InvalidFieldError);
      }

      if (!password) {
        invalidInputError.invalidFields.push({
          __typename: 'InvalidFieldError',
          field: 'password',
          message: 'Password is required'
        } as InvalidFieldError);
      }

      if (!firstname) {
        invalidInputError.invalidFields.push({
          __typename: 'InvalidFieldError',
          field: 'firstname',
          message: 'Firstname is required'
        } as InvalidFieldError);
      }

      if (!lastname) {
        invalidInputError.invalidFields.push({
          __typename: 'InvalidFieldError',
          field: 'lastname',
          message: 'Lastname is required'
        } as InvalidFieldError);
      }

      if (hasInvalidFields(invalidInputError)) {
        return invalidInputError;
      }

      //Check if email is valid
      if (!validator.isEmail(email)) {
        invalidInputError.invalidFields.push({
          __typename: 'InvalidFieldError',
          field: 'email',
          message: 'Email is invalid'
        });
      }

      //Check if password is valid
      if (!validator.isStrongPassword(password)) {
        invalidInputError.invalidFields.push({
          __typename: 'InvalidFieldError',
          field: 'password',
          message:
            'Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 symbol'
        });
      }

      if (hasInvalidFields(invalidInputError)) {
        return invalidInputError;
      }

      //Check if user already exists
      const match = await context.prisma.user.findUnique({
        where: {
          email: email
        }
      });

      if (match) {
        invalidInputError.invalidFields.push({
          __typename: 'InvalidFieldError',
          field: 'email',
          message: 'Email already exists'
        });
      }

      if (hasInvalidFields(invalidInputError)) {
        return invalidInputError;
      }

      //Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      //Create user
      const user = await context.prisma.user.create({
        data: {
          email: email,
          password: hashedPassword,
          firstname: firstname,
          lastname: lastname
        }
      });

      return user;
    }
  }
};

function hasInvalidFields(invalidInputError: InvalidInputError) {
  return invalidInputError.invalidFields.length > 0;
}
