import React from 'react';
import { Box, Stack, Typography, Button, Link } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import LaunchIcon from '@mui/icons-material/Launch';
import Page from '../components/Page';
import PortfolioSection from '../components/PortfolioSection';
import ExperienceCard from '../components/ExperienceCard';
import PortfolioProjectCard from '../components/PortfolioProjectCard';
import FeaturedProjectCard from '../components/FeaturedProjectCard';
import {
  intro,
  featuredProject,
  experience,
  projects,
  links,
  resumeUrl,
} from '../data/portfolio';

const PortfolioPage: React.FC = () => {
  return (
    <Page maxWidth="md" center={false} sx={{ py: { xs: 4, md: 6 } }}>
      <Stack spacing={5}>
        {/* Header */}
        <Box>
          <Typography variant="h3" component="h1" gutterBottom>
            Portfolio
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
            {intro}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href={resumeUrl}
            download
            startIcon={<DownloadIcon />}
          >
            Download Resume
          </Button>
        </Box>

        {/* Featured project */}
        <FeaturedProjectCard project={featuredProject} />

        {/* Experience */}
        <PortfolioSection title="Experience">
          {experience.map((exp) => (
            <ExperienceCard key={exp.company} experience={exp} />
          ))}
        </PortfolioSection>

        {/* Projects */}
        <PortfolioSection title="Projects">
          <Box
            sx={{
              display: 'grid',
              gap: 2,
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            }}
          >
            {projects.map((project, i) => {
              // With a 2-column grid an odd number of projects leaves the last
              // card alone on its row; span it across both columns so it fills
              // the width instead of leaving a gap.
              const isLeftover = projects.length % 2 === 1 && i === projects.length - 1;
              return (
                <Box
                  key={project.name}
                  sx={isLeftover ? { gridColumn: { md: '1 / -1' } } : undefined}
                >
                  <PortfolioProjectCard project={project} />
                </Box>
              );
            })}
          </Box>
        </PortfolioSection>

        {/* Links */}
        <PortfolioSection title="Links">
          <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                underline="always"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontWeight: 600 }}
              >
                {link.label} <LaunchIcon fontSize="small" />
              </Link>
            ))}
          </Stack>
        </PortfolioSection>
      </Stack>
    </Page>
  );
};

export default PortfolioPage;
