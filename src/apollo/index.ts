import { readFileSync } from 'node:fs';
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from '@apollo/server';
import { baseResolver } from '../graphql/base/baseResolver.js';

interface IGraphqlContext {
  prisma: PrismaClient;
}

const baseTypeDefs = readFileSync('./dist/graphql/base/baseSchema.graphql', 'utf8');

const server = new ApolloServer({
  typeDefs: [baseTypeDefs],
  resolvers: baseResolver
});

export default server;
