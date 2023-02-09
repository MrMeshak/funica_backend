import { readFileSync } from 'node:fs';
import path from 'path';
import { ApolloServer } from '@apollo/server';
import { rootResolvers } from '../graphql/resolvers/rootResolvers.js';

const rootTypeDefs = readFileSync('./dist/graphql/rootSchema.graphql', 'utf8');

const server = new ApolloServer({
  typeDefs: [rootTypeDefs],
  resolvers: rootResolvers,
});

export default server;
