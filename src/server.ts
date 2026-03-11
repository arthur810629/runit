import getApp from './index.js';
import type { FastifyInstance } from 'fastify';

const app: FastifyInstance = await getApp();

const parsedPort = Number.parseInt(process.env.PORT ?? '', 10);
const port: number = Number.isNaN(parsedPort) ? 3000 : parsedPort;
const host: string = process.env.HOST || '0.0.0.0';

app.listen({ port, host }, (err: Error | null, address: string) => {
  if (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
  console.log(`Server is running on ${address}`);
  console.log(`welcome endpoint: ${address}/`);
});
