import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { PrismaClient, User } from '@prisma/client';
import { IGraphqlContext } from '../../../apollo';
import { authResolver } from '../authResolver.js';
import { IncomingMessage, OutgoingMessage } from 'http';
import { GraphQLResolveInfo } from 'graphql';
import { InvalidCredentialsError, InvalidInputError } from '../../graphqlTypes';
import { IAuthData } from '../../../apollo/middleware/authMiddleware';
import bcrypt from 'bcrypt';

interface IMockGraphqlContext {
  prisma: DeepMockProxy<PrismaClient>;
  authData: IAuthData;
  req: DeepMockProxy<IncomingMessage>;
  res: DeepMockProxy<OutgoingMessage>;
}

describe('graphql - authResolver', () => {
  describe('login', () => {
    const mockContext: Partial<IMockGraphqlContext> = {
      prisma: mockDeep<PrismaClient>(),
      req: mockDeep<IncomingMessage>(),
      res: mockDeep<OutgoingMessage>()
    };

    const info: Partial<GraphQLResolveInfo> = {};

    beforeEach(() => {
      jest.clearAllMocks();
    });

    describe('When the email or password fields are empty', () => {
      it('should return an InvalidInputError', async () => {
        const email = '';
        const password = '';

        const result = await authResolver.Query?.login!(
          {},
          { input: { email, password } },
          mockContext as IGraphqlContext,
          info as GraphQLResolveInfo
        );

        const expected: InvalidInputError = {
          message: 'Invalid input arguments',
          invalidFields: [
            {
              field: 'email',
              message: 'Email is required'
            },
            {
              field: 'password',
              message: 'Password is required'
            }
          ]
        };

        expect(result).toMatchObject(expected);
        return;
      });
    });

    describe('When the email field is an invalid format', () => {
      it('should return an InvalidInputError', async () => {
        const email = 'incorrectly formatted email';
        const password = 'password';

        const result = await authResolver.Query?.login!(
          {},
          { input: { email, password } },
          mockContext as IGraphqlContext,
          info as GraphQLResolveInfo
        );

        const expected: InvalidInputError = {
          message: 'Invalid input arguments',
          invalidFields: [
            {
              field: 'email',
              message: 'Email is invalid'
            }
          ]
        };

        expect(result).toMatchObject(expected);
        return;
      });
    });

    describe('When the email field is a valid format but the user does not exist', () => {
      it('Should return an InvalidCredentialsError', async () => {
        const email = 'email@gmail.com';
        const password = 'password';

        mockContext.prisma?.user.findUnique.mockResolvedValueOnce(null);

        const result = await authResolver.Query?.login!(
          {},
          { input: { email, password } },
          mockContext as IGraphqlContext,
          info as GraphQLResolveInfo
        );

        const expected: InvalidCredentialsError = {
          message: 'Invalid credentials'
        };

        expect(result).toMatchObject(expected);
        return;
      });
    });

    describe('When the email field is a valid format and the user exists but the password is incorrect', () => {
      it('Should return an InvalidCredentialsError', async () => {
        const email = 'email@gmail.com';
        const incorrectPassword = 'incorrectPassword';
        const password = 'password';
        const salt = await bcrypt.genSalt(1);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user: Partial<User> = { email: 'email@gmail.com', password: hashedPassword };
        mockContext.prisma?.user.findUnique.mockResolvedValueOnce(user as User);

        const result = await authResolver.Query?.login!(
          {},
          { input: { email: email, password: incorrectPassword } },
          mockContext as IGraphqlContext,
          info as GraphQLResolveInfo
        );

        const expected: InvalidCredentialsError = {
          message: 'Invalid credentials'
        };

        expect(result).toMatchObject(expected);
        return;
      });
    });

    describe('When the email field is a valid format and the user exists and the password is correct', () => {
      it('Should set the authToken in the cookies and return the user', async () => {
        const email = 'email@gmail.com';
        const password = 'password';
        const salt = await bcrypt.genSalt(1);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user: Partial<User> = { email: 'email@gmail.com', password: hashedPassword };
        mockContext.prisma?.user.findUnique.mockResolvedValueOnce(user as User);

        const result = await authResolver.Query?.login!(
          {},
          { input: { email, password } },
          mockContext as IGraphqlContext,
          info as GraphQLResolveInfo
        );

        expect(result).toMatchObject(user);
        expect(mockContext.res?.setHeader).toHaveBeenCalledWith(
          'Set-Cookie',
          expect.stringContaining('authToken'),
          expect.objectContaining({
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: expect.any(Number)
          })
        );

        return;
      });
    });
  });

  describe('signup', () => {
    const mockContext: Partial<IMockGraphqlContext> = {
      prisma: mockDeep<PrismaClient>(),
      req: mockDeep<IncomingMessage>(),
      res: mockDeep<OutgoingMessage>()
    };

    const info: Partial<GraphQLResolveInfo> = {};

    beforeEach(() => {
      jest.clearAllMocks();
    });

    describe('When the email, password, firstname or lastname fields are empty', () => {
      it('Should return an InvalidInputError', async () => {
        const email = '';
        const password = '';
        const firstname = '';
        const lastname = '';

        const result = await authResolver.Mutation?.signup!(
          {},
          { input: { email, password, firstname, lastname } },
          mockContext as IGraphqlContext,
          info as GraphQLResolveInfo
        );

        const expected: InvalidInputError = {
          message: 'Invalid input arguments',
          invalidFields: [
            {
              field: 'email',
              message: 'Email is required'
            },
            {
              field: 'password',
              message: 'Password is required'
            },
            {
              field: 'firstname',
              message: 'Firstname is required'
            },
            {
              field: 'lastname',
              message: 'Lastname is required'
            }
          ]
        };

        expect(result).toMatchObject(expected);
        return;
      });
    });

    describe('When the email field or password field have an invalid format', () => {
      it('Should return an InvalidInputError', async () => {
        const email = 'incorrectly formatted email';
        const password = 'incorrectly formatted password';
        const firstname = 'firstname';
        const lastname = 'lastname';

        const result = await authResolver.Mutation?.signup!(
          {},
          { input: { email, password, firstname, lastname } },
          mockContext as IGraphqlContext,
          info as GraphQLResolveInfo
        );

        const expected: InvalidInputError = {
          message: 'Invalid input arguments',
          invalidFields: [
            {
              field: 'email',
              message: 'Email is invalid'
            },
            {
              field: 'password',
              message:
                'Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 symbol'
            }
          ]
        };

        expect(result).toMatchObject(expected);
        return;
      });
    });

    describe('When the email and password field are a valid format and the user already exists', () => {
      it('Should return an InvalidInputError', async () => {
        const email = 'email@gmail.com';
        const password = 'Password1!';
        const firstname = 'firstname';
        const lastname = 'lastname';

        const user: Partial<User> = { email: 'email@gmail.com' };

        mockContext.prisma?.user.findUnique.mockResolvedValue(user as User);

        const expected: InvalidInputError = {
          message: 'Invalid input arguments',
          invalidFields: [
            {
              field: 'email',
              message: 'Email already exists'
            }
          ]
        };

        const result = await authResolver.Mutation?.signup!(
          {},
          { input: { email, password, firstname, lastname } },
          mockContext as IGraphqlContext,
          info as GraphQLResolveInfo
        );

        expect(result).toMatchObject(expected);
        return;
      });
    });

    describe('When the email and password field are a valid format and the user does not already exist', () => {
      it('Should create the user and return the user', async () => {
        const email = 'email@gmail.com';
        const password = 'Password1!';
        const firstname = 'firstname';
        const lastname = 'lastname';

        const user = { email, firstname, lastname } as User;

        mockContext.prisma?.user.findUnique.mockResolvedValue(null);
        mockContext.prisma?.user.create.mockResolvedValueOnce({
          email,
          firstname,
          lastname
        } as User);

        const result = await authResolver.Mutation?.signup!(
          {},
          { input: { email, password, firstname, lastname } },
          mockContext as IGraphqlContext,
          info as GraphQLResolveInfo
        );

        expect(result).toMatchObject(user);

        return;
      });
    });
  });
});
