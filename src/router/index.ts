import { router } from '../context.js';
import { userRouter } from './userRouter.js';
import { snippetRouter } from './snippetRouter.js';

export const appRouter = router({
  users: userRouter,    // Роутер для пользователей
  snippets: snippetRouter, // роутер для сниппетов
});

export type AppRouter = typeof appRouter;
