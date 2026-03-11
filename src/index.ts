import { fastify } from 'fastify';
import { fastifyTRPCPlugin, FastifyTRPCPluginOptions } from '@trpc/server/adapters/fastify';

import { runMigrations } from './db/connection.js';
import { appRouter, type AppRouter } from './router/index.js';

const getApp = async () => {
  try {
    await runMigrations();
  } catch (error) {
    console.error('Migration failed:', error);
    throw error;
  }

  const server = fastify({
    logger: {
      level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    },
    routerOptions: {
      maxParamLength: 1000,
      caseSensitive: false,
      ignoreTrailingSlash: true,
    },
  });

  server.get('/', async (_request, reply) => {
    reply.type('application/json').send({
      status: 'ok',
      service: 'runit-api',
      procedures: Object.keys(appRouter._def?.procedures || {}),
    });
  });

  server.get('/hello', async (_request, reply) => {
    reply.type('text/plain').send('Hello world');
  });

  try {
    await server.register(fastifyTRPCPlugin, {
      prefix: '/trpc',
      trpcOptions: {
        router: appRouter,
        onError({ path, error }) {
          server.log.error({ path, error }, 'tRPC request failed');
        },
      } satisfies FastifyTRPCPluginOptions<AppRouter>['trpcOptions'],
    });
  } catch (error) {
    console.error('Failed to register tRPC plugin:', error);
    throw error;
  }

  return server;
};

export default getApp;
