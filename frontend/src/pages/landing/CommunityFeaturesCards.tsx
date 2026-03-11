import { Cookie, Person, Speedometer2 } from 'react-bootstrap-icons';
import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from './CommunityFeaturesCards.module.css';

const mockdata = [
  {
    title: 'Быстрый рост',
    description:
      'Участвуйте в обсуждениях, разборах кода и активностях сообщества, чтобы быстрее прокачивать навыки.',
    icon: Speedometer2,
  },
  {
    title: 'Поддержка участников',
    description:
      'Получайте помощь от участников и менторов по задачам, карьерным вопросам и техническим решениям.',
    icon: Person,
  },
  {
    title: 'Без посредников',
    description:
      'Общайтесь напрямую с разработчиками и участниками сообщества в открытых каналах и клубе.',
    icon: Cookie,
  },
];

function CommunityFeaturesCards() {
  const theme = useMantineTheme();

  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      className={classes.card}
      padding="xl"
      radius="md"
      shadow="md"
    >
      <ThemeIcon
        color={theme.primaryColor}
        radius="xl"
        size={56}
        variant="light"
      >
        <feature.icon size={28} />
      </ThemeIcon>
      <Text className={classes.cardTitle} fw={500} fz="lg" mt="md">
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container p={0} size="lg">
      <Group justify="center">
        <Badge size="lg" variant="filled">
          Сильное комьюнити
        </Badge>
      </Group>

      <Title className={classes.title} mt="sm" order={2} ta="center">
        Растите вместе с RunIT сообществом
      </Title>

      <Text c="dimmed" className={classes.description} mt="md" ta="center">
        Каналы, клуб и живые обсуждения помогают быстрее находить ответы,
        обмениваться опытом и двигаться в профессии.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} mt={40} spacing="xl">
        {features}
      </SimpleGrid>
    </Container>
  );
}

export default CommunityFeaturesCards;
