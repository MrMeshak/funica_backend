import { PrismaClient } from '@prisma/client';
import { IncomingMessage, ServerResponse } from 'http';
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
  return async (req: IncomingMessage, res: ServerResponse): Promise<IAuthData> => {
    const cookies = cookie.parse(req.headers.cookie ?? '');
    const authToken = cookies['authToken'];
    if (!authToken) {
      return {
        isAuth: false,
        userId: '',
        error: 'missing authentication token'
      };
    }

    const user = await context.prisma.user.findUnique({
      where: {
        token: token
      }
    });
    if (!user) {
      return {
        isAuth: false,
        userId: '',
        error: 'Invalid token'
      };
    }
    return {
      isAuth: true,
      userId: user.id,
      error: ''
    };
  };
};
