import { AppShell, Box } from '@mantine/core';
import TechnologiesSection, { mockDataTechnology } from './TechnologiesSection';
import { SectionContainer } from './layout';
import FeaturesSection from './FeaturesSection';
import HeroBanner, { mockData } from './MainBanner';
import { Header } from './Header';
import CallToAction from './CallToAction';
import CommunitySection, { communityMockData } from './CommunitySection';
import Footer from './Footer-1';

function HomePage() {
  return (
    <AppShell header={{ height: 80 }}>
      <AppShell.Header withBorder>
        <SectionContainer>
          <Header />
        </SectionContainer>
      </AppShell.Header>

      <AppShell.Main pt={92}>
        <Box component="section" id="about" py={{ base: 36, md: 64 }}>
          <SectionContainer>
            <HeroBanner data={mockData} />
          </SectionContainer>
        </Box>

        <Box
          bg="gray.0"
          component="section"
          id="opportunities"
          py={{ base: 36, md: 64 }}
        >
          <SectionContainer>
            <FeaturesSection />
          </SectionContainer>
        </Box>

        <Box component="section" id="technologies" py={{ base: 36, md: 64 }}>
          <SectionContainer>
            <TechnologiesSection technologies={mockDataTechnology} />
          </SectionContainer>
        </Box>

        <Box
          bg="gray.0"
          component="section"
          id="community"
          py={{ base: 36, md: 64 }}
        >
          <SectionContainer>
            <CommunitySection communities={communityMockData} />
          </SectionContainer>
        </Box>

        <Box component="section" py={{ base: 36, md: 64 }}>
          <SectionContainer>
            <CallToAction />
          </SectionContainer>
        </Box>
      </AppShell.Main>

      <AppShell.Footer pos="relative" withBorder>
        <SectionContainer>
          <Footer />
        </SectionContainer>
      </AppShell.Footer>
    </AppShell>
  );
}

export default HomePage;
