import { readFileSync } from 'node:fs';
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from '@apollo/server';
import { IncomingMessage, OutgoingMessage } from 'node:http';
import { authMiddleware, IAuthData } from './middleware/authMiddleware.js';
import _ from 'lodash';
import prisma from '../prisma/prismaClient.js';
import { authResolver } from '../graphql/auth/authResolver.js';
import { baseResolver } from '../graphql/base/baseResolver.js';
import { loginPageResolver } from '../graphql/loginPage/loginPageResolver.js';

export interface IGraphqlContext {
  prisma: PrismaClient;
  authData: IAuthData;
  req: IncomingMessage;
  res: OutgoingMessage;
}

export const generateContext = async (
  req: IncomingMessage,
  res: OutgoingMessage
): Promise<IGraphqlContext> => {
  const authData = await authMiddleware({ prisma: prisma })(req);
  return {
    prisma: prisma,
    authData: authData,
    req: req,
    res: res
  };
};

const baseTypeDefs = readFileSync('./dist/graphql/base/baseSchema.graphql', 'utf8');
const baseUITypeDefs = readFileSync('./dist/graphql/base/baseUISchema.graphql', 'utf8');
const authTypeDefs = readFileSync('./dist/graphql/auth/authSchema.graphql', 'utf8');
const loginPageTypeDefs = readFileSync('./dist/graphql/loginPage/loginPageSchema.graphql', 'utf8');

const server = new ApolloServer<IGraphqlContext>({
  typeDefs: [baseTypeDefs, baseUITypeDefs, authTypeDefs, loginPageTypeDefs],
  resolvers: _.merge({}, baseResolver, authResolver, loginPageResolver)
});

export default server;
