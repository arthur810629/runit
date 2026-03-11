import {
  Title,
  Box,
  SimpleGrid,
  Paper,
  Text,
  Badge,
  Group,
  Stack,
} from '@mantine/core';
import type { TechnologyCategory } from 'src/types/components';

export const mockDataTechnology: TechnologyCategory[] = [
  {
    category: 'Языки',
    items: [
      'JavaScript',
      'TypeScript',
      'Python',
      'Go',
      'Rust',
      'C',
      'C++',
      'PHP',
      'Ruby',
    ],
  },
  {
    category: 'Базы данных',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Redis', 'ClickHouse'],
  },
  {
    category: 'Инструменты',
    items: ['Git', 'grep', 'curl', 'Mermaid', 'Latex'],
  },
];

function TechnologiesSection({
  technologies,
}: {
  technologies: TechnologyCategory[];
}) {
  return (
    <Box component="section">
      <Title mb="sm" order={2}>
        Технологии
      </Title>
      <Text c="dimmed" maw={760} size="md">
        Поддерживаем популярные языки, базы данных и инструменты — от быстрого
        прототипирования до полноценных демо для документации.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} mt="xl" spacing="md">
        {technologies.map(({ category, items }) => (
          <Paper key={category} p="lg" radius="md" withBorder>
            <Stack gap="md">
              <Title c="dimmed" order={4}>
                {category}
              </Title>
              <Group gap="xs">
                {items.map((technologyName) => (
                  <Badge
                    key={technologyName}
                    bg="#0D6EFD19"
                    color="blue"
                    radius="sm"
                    size="lg"
                    styles={{ label: { textTransform: 'none' } }}
                    variant="outline"
                  >
                    {technologyName}
                  </Badge>
                ))}
              </Group>
            </Stack>
          </Paper>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default TechnologiesSection;
