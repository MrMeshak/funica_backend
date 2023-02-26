import { PrismaClient, User } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { IncomingMessage } from 'http';
import { authMiddleware, IAuthData } from '../authMiddleware';
import { createAuthToken } from '../../../utils/jwtHelper';

interface IMockAuthMiddlewareContext {
  prisma: DeepMockProxy<PrismaClient>;
}

describe('middleware - authMiddleware', () => {
  let mockContext: IMockAuthMiddlewareContext;

  beforeEach(() => {
    mockContext = {
      prisma: mockDeep<PrismaClient>()
    };
  });

  describe('when the request does not contain an authentication token', () => {
    const errorMessage = 'missing authentication token';
    it(`should return authData object with {isAuth: false, userId: "", error: ${errorMessage}}`, async () => {
      const req: Partial<IncomingMessage> = {
        headers: {
          cookie: ''
        }
      };

      const authDataExpected: IAuthData = {
        isAuth: false,
        userId: '',
        error: errorMessage
      };

      const authData = await authMiddleware(mockContext)(req as IncomingMessage);
      expect(authData).toEqual(authDataExpected);
    });
  });

  describe('when the request contains an invalid authentication token', () => {
    const errorMessage = 'invalid authentication token (A)';
    it(`should return authData object with {isAuth: false, userId: "", error: ${errorMessage}}`, async () => {
      const req: Partial<IncomingMessage> = {
        headers: {
          cookie: 'authToken=invalidToken'
        }
      };

      const authDataExpected: IAuthData = {
        isAuth: false,
        userId: '',
        error: errorMessage
      };

      const authData = await authMiddleware(mockContext)(req as IncomingMessage);
      expect(authData).toEqual(authDataExpected);
    });
  });

  describe('when the request contains a valid authentication token but User does not exist', () => {
    const errorMessage = 'invalid authentication token (B)';
    it(`should return authData object with {isAuth: true, userId: "userId", error: ${errorMessage} }`, async () => {
      const authToken = createAuthToken('userId');
      const req: Partial<IncomingMessage> = {
        headers: {
          cookie: `authToken=${authToken}`
        }
      };

      const authDataExpected: IAuthData = {
        isAuth: false,
        userId: '',
        error: errorMessage
      };

      mockContext.prisma.user.findUnique.mockResolvedValueOnce(null);

      const authData = await authMiddleware(mockContext)(req as IncomingMessage);
      expect(authData).toEqual(authDataExpected);
    });
  });

  describe('when the request contains a valid authentication token and User exists', () => {
    it(`should return authData object with {isAuth: true, userId: "userId", error: "" }`, async () => {
      const authToken = createAuthToken('userId');
      const req: Partial<IncomingMessage> = {
        headers: {
          cookie: `authToken=${authToken}`
        }
      };

      const user: Partial<User> = {
        id: 'userId'
      };

      const authDataExpected: IAuthData = {
        isAuth: true,
        userId: 'userId',
        error: ''
      };

      mockContext.prisma.user.findUnique.mockResolvedValueOnce(user as User);

      const authData = await authMiddleware(mockContext)(req as IncomingMessage);
      expect(authData).toEqual(authDataExpected);
    });
  });
});
