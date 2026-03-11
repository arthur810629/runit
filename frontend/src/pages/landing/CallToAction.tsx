import { Flex, Title, Text, Button, Stack, Box } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { actions as modalActions } from '../../slices/modalSlice';

const mockdata = {
  data: {
    textContent: {
      title: 'Готовы попробовать?',
      subtitle: 'Начните бесплатно. Без установки и регистрации.',
    },
  },
};

function CallToAction() {
  const { t: ctaTextContent } = useTranslation('translation', {
    keyPrefix: 'landing.callToAction',
  });
  const { data } = mockdata;
  const dispatch = useDispatch();

  const handleOpenIDE = () => {
    dispatch(modalActions.openModal({ type: 'newSnippet' }));
  };

  const handleOpenDocs = () => {
    dispatch(modalActions.openModal({ type: 'inDevelopment' }));
  };

  return (
    <Box component="section">
      <Flex
        bd="1px solid var(--mantine-color-gray-3)"
        bg="var(--mantine-color-body)"
        gap="xl"
        justify="space-between"
        p={{ base: 'lg', md: 'xl' }}
        radius="lg"
        wrap="wrap"
      >
        <Box maw={520}>
          <Title fw={700} mb="xs" order={2}>
            {data.textContent.title}
          </Title>
          <Text c="dimmed">{data.textContent.subtitle}</Text>
        </Box>

        <Stack justify="flex-end">
          <Flex direction={{ base: 'column', sm: 'row' }} gap="sm">
            <Button
              onClick={handleOpenIDE}
              radius="xl"
              size="md"
              variant="filled"
            >
              {ctaTextContent('ideButton')}
            </Button>
            <Button
              onClick={handleOpenDocs}
              radius="xl"
              size="md"
              variant="default"
            >
              {ctaTextContent('docButton')}
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
}

export default CallToAction;
