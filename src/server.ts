import { startStandaloneServer } from '@apollo/server/standalone';
import server from './apollo/index.js';

const port = Number(process.env.PORT ?? 8080);

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: port },
  });
  console.log(`Server is ready at: ${url}`);
};

startServer();
