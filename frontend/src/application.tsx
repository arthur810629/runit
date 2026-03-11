import { configureStore } from '@reduxjs/toolkit';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { QueryClient } from '@tanstack/react-query';
import { createTRPCClient, httpLink } from '@trpc/client';

import type { AppRouter } from '../../types/router/index';
import AppRoutes from './AppRoutes';
import { rootReducer } from './slices';
import { initI18next } from './initI18next';
import AppProviders from './app/AppProviders';

const makeQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

async function createApplication() {
  const queryClient = makeQueryClient();
  const trpcClient = createTRPCClient<AppRouter>({
    links: [
      httpLink({
        url: '/trpc',
        headers() {
          const token = localStorage.getItem('token');
          return token ? { authorization: `Bearer ${token}` } : {};
        },
      }),
    ],
  });

  await initI18next();

  const store = configureStore({
    reducer: rootReducer,
  });

  return (
    <AppProviders
      queryClient={queryClient}
      store={store}
      trpcClient={trpcClient}
    >
      <AppRoutes />
    </AppProviders>
  );
}

export default createApplication;
