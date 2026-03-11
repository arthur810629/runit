import {
  Text,
  Divider,
  Grid,
  Group,
  Box,
  Badge,
  Stack,
  Code,
  Card,
  Button,
  SimpleGrid,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { motion } from 'framer-motion';
import PencilIcon from './assets/IconMainBanner/Pencil.svg?react';
import PlayIcon from './assets/IconMainBanner/Play.svg?react';

interface HeroBannerContent {
  id: number;
  title: string;
  textContent: string;
}

interface HeroBanner {
  id: number;
  subHeader: string;
  header: string;
  subtitle: string;
  content: HeroBannerContent[];
  CTA: string;
}

interface HeroBannerProps {
  data: HeroBanner;
}

export const mockData: HeroBanner = {
  id: 1,
  subHeader: 'Быстрый старт',
  header: 'Мгновенный IDE в браузере',
  subtitle:
    'Пишите и запускайте код без установки конфигурации. Делитесь сниппетами, подключайте песочницы и встраивайте в документацию.',
  content: [
    {
      id: 1,
      title: 'Запуск за секунды',
      textContent: 'Откройте проект — и всё уже готово.',
    },
    {
      id: 2,
      title: 'Виджеты',
      textContent: 'Встраивайте интерактивные примеры в статьи и docs.',
    },
    {
      id: 3,
      title: 'Шаринг',
      textContent: 'Делитесь ссылкой или embeddable-версией.',
    },
  ],
  CTA: 'Начать кодить',
};

const featureItems = (data: HeroBannerContent[]) =>
  data.map((item) => (
    <Card key={item.id} p="md" radius="md" withBorder>
      <Stack align="start" gap={6}>
        <Text fw={700} size="sm">
          {item.title}
        </Text>
        <Text c="dimmed" size="sm">
          {item.textContent}
        </Text>
      </Stack>
    </Card>
  ));

function HeroBanner({ data = mockData }: HeroBannerProps) {
  const codeExample = `function greet(name) {
  console.log('Hello, ' + name);
}

greet('RunIT');`;

  const MotionWrapper = motion.div;

  return (
    <Box component="section">
      <MotionWrapper
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 12 }}
        transition={{
          duration: 0.8,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        <Grid align="center" gutter={{ base: 'xl', md: 48 }}>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Text c="dimmed" fw={600} size="xs" tt="uppercase">
              {data.subHeader}
            </Text>
            <Title maw={560} mb="sm" mt={6} order={1}>
              {data.header}
            </Title>
            <Text c="dimmed" maw={560} size="lg">
              {data.subtitle}
            </Text>
            <Button mt="xl" radius="xl" size="md">
              {data.CTA}
            </Button>
            <SimpleGrid cols={{ base: 1, sm: 3 }} mt="xl" spacing="sm">
              {featureItems(data.content)}
            </SimpleGrid>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Card bg="#1a1b1e" p={0} radius="md" withBorder>
              <Group gap="xs" justify="space-between" px="md" py="sm">
                <Group gap="xs">
                  <ThemeIcon color="red" radius="xl" size={10} />
                  <ThemeIcon color="yellow" radius="xl" size={10} />
                  <ThemeIcon color="green" radius="xl" size={10} />
                  <Text c="gray.4" size="xs">
                    JavaScript - demo.js
                  </Text>
                </Group>
                <Badge
                  color="dark"
                  radius="sm"
                  size="md"
                  styles={{ label: { textTransform: 'none' } }}
                  variant="filled"
                >
                  snippet
                </Badge>
              </Group>
              <Divider color="gray.7" />
              <Code block c="white" color="#1a1b1e" h={132} px="md" py="sm">
                {codeExample}
              </Code>
              <Group gap="xs" px="md" py="md">
                <Button
                  color="blue"
                  leftSection={<PlayIcon style={{ height: 15 }} />}
                >
                  Запустить
                </Button>
                <Button
                  color="gray"
                  leftSection={<PencilIcon style={{ height: 15 }} />}
                  variant="outline"
                >
                  Редактировать
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>
      </MotionWrapper>
    </Box>
  );
}

export default HeroBanner;
