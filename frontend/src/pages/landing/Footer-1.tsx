import { Anchor, Flex, Group, Text } from '@mantine/core';

type PropsFooter = {
  id: number;
  link: string;
  label: string;
};

export const links: PropsFooter[] = [
  { id: 1, link: '#about', label: 'О проекте' },
  { id: 2, link: '#opportunities', label: 'Возможности' },
  { id: 3, link: '#technologies', label: 'Технологии' },
  { id: 4, link: '#community', label: 'Сообщество' },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  const items = links.map((link) => (
    <Anchor<'a'> c="dimmed" href={link.link} key={link.id} size="sm">
      {link.label}
    </Anchor>
  ));

  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap="sm"
      justify="space-between"
      py="xl"
    >
      <Text c="dimmed" size="sm">
        © {currentYear} RunIT
      </Text>
      <Group>{items}</Group>
    </Flex>
  );
}

export default Footer;
