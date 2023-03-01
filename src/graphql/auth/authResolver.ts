import validator from 'validator';
import bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import {
  LoginResult,
  InvalidInputError,
  InvalidFieldError,
  Resolvers,
  InvalidCredentialsError
} from '../graphqlTypes';
import { createAuthToken } from '../../utils/jwtHelper.js';

export const authResolver: Resolvers = {
  Query: {
    login: async (_, { email, password }, context): Promise<LoginResult> => {
      const invalidInputError: InvalidInputError = {
        __typename: 'InvalidInputError',
        message: 'Invalid input arguments',
        invalidFields: []
      };

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
      context.res.cookie('authToken', authToken, {
        httpOnly: true,
        sameSite: 'strict',
        secure: true,
        maxAge: 8600
      });

      //Return User
      return user;
    }
  }
};

function hasInvalidFields(invalidInputError: InvalidInputError) {
  return invalidInputError.invalidFields.length > 0;
}
