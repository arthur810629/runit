import { useDisclosure } from '@mantine/hooks';
import { useTernaryDarkMode } from 'usehooks-ts';
import {
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Flex,
  Group,
  ScrollArea,
  Anchor,
  Text,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import RunItLogoLight from './assets/HeaderLightThemeLogo.svg';
import RunItLogoDark from './assets/HeaderDarkThemeLogo.svg';

import LanguageSelector from '../../components/Navigation/LanguageSelector';
import ThemeSelector from '../../components/Navigation/ThemeSelector';

import routes from '../../routes';
import { actions } from '../../slices/index';

const anchorItems = [
  { id: 'about', labelKey: 'about' },
  { id: 'opportunities', labelKey: 'opportunities' },
  { id: 'technologies', labelKey: 'technologies' },
  { id: 'community', labelKey: 'community' },
];

export function Header() {
  const { t: headerTextContent } = useTranslation('translation', {
    keyPrefix: 'landing.header',
  });
  const { t: profileTextContent } = useTranslation('translation', {
    keyPrefix: 'profileActions',
  });

  const redir = useNavigate();
  const dispatch = useDispatch();

  const handleOpenSignUpModal = () => {
    dispatch(actions.openModal({ type: 'signingUp' }));
  };

  const handleRedirToSignIn = () => {
    redir(routes.signInPagePath());
  };

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { isDarkMode } = useTernaryDarkMode();
  const logo = isDarkMode ? RunItLogoDark : RunItLogoLight;

  const ComputedAnchorElements = () =>
    anchorItems.map(({ id, labelKey }) => (
      <Anchor key={id} size="sm" underline="never" href={`#${id}`}>
        <Text c="inherit">{headerTextContent(labelKey)}</Text>
      </Anchor>
    ));

  return (
    <Box py="md">
      <Group justify="space-between">
        <img src={logo} alt="RunIT logo" width="86px" />

        <Group c="dimmed" gap="lg" visibleFrom="lg">
          {ComputedAnchorElements()}
        </Group>

        <Group visibleFrom="md">
          <LanguageSelector />
          <ThemeSelector />
          <Button onClick={handleRedirToSignIn} radius="xl" variant="default">
            {profileTextContent('signIn')}
          </Button>
          <Button onClick={handleOpenSignUpModal} radius="xl">
            {profileTextContent('signUp')}
          </Button>
        </Group>

        <Burger hiddenFrom="lg" opened={drawerOpened} onClick={toggleDrawer} />
      </Group>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        padding="md"
        size="100%"
        title={<img src={logo} alt="RunIT logo" width="90px" />}
        zIndex={65535}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />
          <Flex direction="column" gap="md" px="md" py="sm">
            {ComputedAnchorElements()}
          </Flex>

          <Divider my="sm" />

          <Group justify="flex-start" pb="xl" px="md">
            <Button onClick={handleOpenSignUpModal} variant="default">
              <span>{profileTextContent('signUp')}</span>
            </Button>
            <Button onClick={handleRedirToSignIn}>
              <span>{profileTextContent('signIn')}</span>
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default Header;
