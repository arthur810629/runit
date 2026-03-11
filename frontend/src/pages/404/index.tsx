import {
  Button,
  Container,
  Image,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import classes from './NotFoundImage.module.css';

function NotFound() {
  const { t: tPNF } = useTranslation('translation', {
    keyPrefix: 'pageNotFound',
  });

  return (
    <Container className={classes.root}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={{ base: 40, sm: 80 }}>
        <Image
          alt="Page not found"
          className={classes.mobileImage}
          src="/notFound.svg"
        />
        <div>
          <Title className={classes.title}>{tPNF('title')}</Title>
          <Text c="dimmed" size="lg">
            {tPNF('description')}
          </Text>
          <Button
            className={classes.control}
            component={Link}
            mt="xl"
            size="md"
            to="/"
            variant="outline"
          >
            {tPNF('goHome')}
          </Button>
        </div>
        <Image
          alt="Page not found"
          className={classes.desktopImage}
          src="/notFound.svg"
        />
      </SimpleGrid>
    </Container>
  );
}

export default NotFound;
