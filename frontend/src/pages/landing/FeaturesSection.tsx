import {
  Text,
  Group,
  Box,
  Stack,
  ThemeIcon,
  Card,
  SimpleGrid,
  Anchor,
  Title,
} from '@mantine/core';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

import BeakerIcon from './assets/IconFeatureSection/Beaker.svg?react';
import BriefcaseIcon from './assets/IconFeatureSection/Briefcase.svg?react';
import CheckIcon from './assets/IconFeatureSection/Check.svg?react';
import ClipboardIcon from './assets/IconFeatureSection/ClipboardDocumentCheck.svg?react';
import LinkIcon from './assets/IconFeatureSection/Link.svg?react';
import UsersIcon from './assets/IconFeatureSection/Users.svg?react';

interface Feature {
  id: number;
  title: string;
  textContent: string;
  icon: ReactNode;
}

interface FeaturesSectionProps {
  features?: Feature[];
}

const mocData: Feature[] = [
  {
    id: 1,
    title: 'Песочницы',
    textContent: 'Окружения для JS, TS, Python, SQL и других языков.',
    icon: <BeakerIcon />,
  },
  {
    id: 2,
    title: 'Редактор',
    textContent: 'Лёгкий и быстрый редактор с сохранением в один клик.',
    icon: <ClipboardIcon />,
  },
  {
    id: 3,
    title: 'Встраивание',
    textContent: 'HTML-виджет и React-компонент для документации.',
    icon: <LinkIcon />,
  },
  {
    id: 4,
    title: 'Проверки',
    textContent: 'Добавляйте тесты к задачам, урокам и примерам.',
    icon: <CheckIcon />,
  },
  {
    id: 5,
    title: 'API',
    textContent: 'Запускайте код и управляйте сниппетами из приложений.',
    icon: <BriefcaseIcon />,
  },
  {
    id: 6,
    title: 'Команда',
    textContent: 'Совместная работа и общий доступ для всей команды.',
    icon: <UsersIcon />,
  },
];

const MotionCardWrapper = motion.div;

const items = (data: Feature[]) =>
  data.map((item) => (
    <MotionCardWrapper
      key={item.id}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      style={{ height: '100%' }}
    >
      <Card h="100%" p="lg" radius="md" withBorder>
        <Group align="start" wrap="nowrap">
          <ThemeIcon size="lg" variant="light">
            {item.icon}
          </ThemeIcon>
          <Stack align="start" gap={4}>
            <Text fw={700} size="md">
              {item.title}
            </Text>
            <Text c="dimmed" size="sm">
              {item.textContent}
            </Text>
          </Stack>
        </Group>
      </Card>
    </MotionCardWrapper>
  ));

function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <Box component="section">
      <Group justify="space-between" mb="xl">
        <Title order={2}>Что умеет RunIT</Title>
        <Anchor c="blue" href="#" size="sm">
          Документация
        </Anchor>
      </Group>

      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 'md', md: 'lg' }}
        verticalSpacing={{ base: 'md', md: 'lg' }}
      >
        {items(features)}
      </SimpleGrid>
    </Box>
  );
}

export default FeaturesSection;

FeaturesSection.defaultProps = {
  features: mocData,
};
