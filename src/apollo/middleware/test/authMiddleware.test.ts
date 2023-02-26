import { PrismaClient } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';

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
});
