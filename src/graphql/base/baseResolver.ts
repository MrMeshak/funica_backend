import type { Resolvers } from '../graphqlTypes';

export const baseResolver: Resolvers = {
  Query: {
    hello: (): string => {
      return 'Hello World!';
    }
  }
};
