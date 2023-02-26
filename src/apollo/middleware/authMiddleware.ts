import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { IncomingMessage } from 'http';
import cookie from 'cookie';

export interface IAuthMiddlewareContext {
  prisma: PrismaClient;
}

export interface IAuthData {
  isAuth: boolean;
  userId: string;
  error: string;
}

export const authMiddleware = (context: IAuthMiddlewareContext) => {
  return async (req: IncomingMessage): Promise<IAuthData> => {
    const cookies = cookie.parse(req.headers.cookie ?? '');
    const authToken = cookies['authToken'];
    if (!authToken) {
      return {
        isAuth: false,
        userId: '',
        error: 'missing authentication token'
      };
    }

    let decodedJwt: jwt.ITokenPayload;

    try {
      decodedJwt = <jwt.ITokenPayload>jwt.verify(authToken, process.env.JWT_SECRET!);
    } catch (error) {
      console.log((error as Error).message);
      return {
        isAuth: false,
        userId: '',
        error: 'invalid authentication token'
      };
    }

    const user = await context.prisma.user.findUnique({
      where: {
        id: decodedJwt.id
      }
    });

    if (!user) {
      return {
        isAuth: false,
        userId: '',
        error: 'invalid authentication token'
      };
    }

    return {
      isAuth: true,
      userId: user.id,
      error: ''
    };
  };
};
