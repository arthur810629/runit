import type { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { QueryClientProvider } from '@tanstack/react-query';
import type { QueryClient } from '@tanstack/react-query';
import type { EnhancedStore } from '@reduxjs/toolkit';
import type { TRPCClient } from '@trpc/client';

import type { AppRouter } from '../../../types/router';
import Footer from '../pages/landing/Footer-1';
import ModalWindow from '../components/Modals';
import Toast from '../components/Toast';
import AuthProvider from '../providers/AuthProvider';
import SnippetsProvider from '../providers/SnippetsProvider';
import { TRPCProvider } from '../utils/trpc';

type AppProvidersProps = PropsWithChildren<{
  queryClient: QueryClient;
  store: EnhancedStore;
  trpcClient: TRPCClient<AppRouter>;
}>;

function AppProviders({
  children,
  queryClient,
  store,
  trpcClient,
}: AppProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider queryClient={queryClient} trpcClient={trpcClient}>
        <Provider store={store}>
          <BrowserRouter
            future={{
              v7_relativeSplatPath: true,
              v7_startTransition: true,
            }}
          >
            <AuthProvider>
              <SnippetsProvider>
                <MantineProvider withCssVariables withStaticClasses>
                  <Notifications />
                  {children}
                  <Footer />
                  <ModalWindow />
                </MantineProvider>
                <Toast />
              </SnippetsProvider>
            </AuthProvider>
          </BrowserRouter>
        </Provider>
      </TRPCProvider>
    </QueryClientProvider>
  );
}

export default AppProviders;
