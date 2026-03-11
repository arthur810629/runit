import { AppShell } from '@mantine/core';

export const LANDING_MAX_WIDTH = 1200;

export function SectionContainer({ children }) {
  return (
    <AppShell.Section
      mx="auto"
      px={{ base: 'md', sm: 'lg' }}
      style={{ maxWidth: LANDING_MAX_WIDTH, width: '100%' }}
    >
      {children}
    </AppShell.Section>
  );
}
