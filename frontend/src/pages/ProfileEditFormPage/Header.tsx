import { AppShell, Box, Button, Group } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks';

function Header() {
  const { t: profileEditText } = useTranslation('translation', {
    keyPrefix: 'profileEdit',
  });

  const { signOut } = useAuth();

  return (
    <AppShell.Header>
      <Group align="center" gap={0} justify="space-between" p="lg">
        <Group align="center" justify="left">
          <Button
            color="indigo"
            ml="lg"
            radius="md"
            size="sm"
            variant="filled"
          />
          <Box fw={700} ml="xs" style={{ fontSize: '18px' }}>
            {profileEditText('header')}
          </Box>
        </Group>
        <Group align="center" justify="flex-end">
          <Button mr="lg" onClick={signOut} radius="lg" variant="default">
            {profileEditText('logout')}
          </Button>
        </Group>
      </Group>
    </AppShell.Header>
  );
}

export default Header;
