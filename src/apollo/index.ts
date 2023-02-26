import { readFileSync } from 'node:fs';
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from '@apollo/server';
import { IncomingMessage } from 'node:http';
import { baseResolver } from '../graphql/base/baseResolver.js';
import { authMiddleware, IAuthData } from './middleware/authMiddleware.js';
import prisma from '../prisma/prismaClient.js';

export interface IGraphqlContext {
  prisma: PrismaClient;
  authData: IAuthData;
}

export const generateContext = async (req: IncomingMessage): Promise<IGraphqlContext> => {
  const authData = await authMiddleware({ prisma: prisma })(req);
  return {
    prisma: prisma,
    authData: authData
  };
};

const baseTypeDefs = readFileSync('./dist/graphql/base/baseSchema.graphql', 'utf8');

const server = new ApolloServer<IGraphqlContext>({
  typeDefs: [baseTypeDefs],
  resolvers: baseResolver
});

export default server;
