import {
  Box,
  Title,
  Text,
  Badge,
  Button,
  Card,
  Group,
  SimpleGrid,
  Stack,
} from '@mantine/core';
import type { CommunityType } from 'src/types/components';
import CommunityFeaturesCards from './CommunityFeaturesCards';

export const communityMockData = [
  {
    badge: '+1k каждый месяц',
    btn: 'Перейти в канал',
    link: 'https://t.me/HexletCareerBot',
    text: 'Обсуждение вакансий и резюме',
    title: 'Тг Карьера',
  },
  {
    badge: 'Активные обсуждения',
    btn: 'Присоединиться',
    link: 'https://t.me/hexletcommunity',
    text: 'Вопросы по коду и обмен опытом',
    title: 'Тг Сообщество',
  },
  {
    badge: 'Закрытый клуб',
    btn: 'Узнать подробнее',
    link: 'https://t.me/HexletClubBot',
    text: 'Нетворкинг и коллаборации',
    title: 'Клуб Хекслета',
  },
];

interface CommunitySectionProps {
  communities: Array<CommunityType>;
}

function CommunitySection({ communities }: CommunitySectionProps) {
  return (
    <Box component="section">
      <Title mb="sm" order={2} ta="center">
        Сообщество
      </Title>
      <Text c="dimmed" mb="xl" mx="auto" size="md" ta="center">
        RunIT — растущее сообщество разработчиков. Присоединяйтесь к каналам и
        оставайтесь в курсе новостей, вакансий и обсуждений.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md">
        {communities.map(({ badge, btn, link, text, title }) => (
          <Card key={title} h="100%" padding="lg" radius="md" withBorder>
            <Stack align="center" gap="md" h="100%" justify="space-between">
              <Badge
                bg="#eef7ff"
                color="blue"
                radius="md"
                size="lg"
                styles={{ label: { textTransform: 'none' } }}
                variant="outline"
              >
                {badge}
              </Badge>

              <Title order={3} ta="center">
                {title}
              </Title>

              <Text c="dimmed" size="sm" ta="center">
                {text}
              </Text>

              <Group justify="center" mt="auto">
                <Button
                  component="a"
                  href={link}
                  radius="xl"
                  rel="noreferrer"
                  target="_blank"
                  variant="default"
                >
                  {btn}
                </Button>
              </Group>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>

      <Box mt={56}>
        <CommunityFeaturesCards />
      </Box>
    </Box>
  );
}

export default CommunitySection;
