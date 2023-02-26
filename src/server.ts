import * as dotenv from 'dotenv';
dotenv.config();
import { startStandaloneServer } from '@apollo/server/standalone';
import { generateContext } from './apollo/index.js';
import server from './apollo/index.js';

const port = Number(process.env.PORT ?? 8080);

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: port },
    context: async ({ req }) => await generateContext(req)
  });
  console.log(`Server is ready at: ${url}`);
};

startServer();
