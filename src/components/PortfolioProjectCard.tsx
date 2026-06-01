import * as React from 'react';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import { PortfolioProject } from '../data/portfolio';

export type PortfolioProjectCardProps = {
  project: PortfolioProject;
};

// Renders a single academic/personal project with its highlights.
const PortfolioProjectCard: React.FC<PortfolioProjectCardProps> = ({ project }) => (
  <Card variant="outlined" sx={{ bgcolor: 'background.default', height: '100%' }}>
    <CardContent>
      <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
        {project.name}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
        {project.tagline}
      </Typography>
      <Stack component="ul" spacing={0.75} sx={{ m: 0, pl: 2.5 }}>
        {project.bullets.map((bullet, i) => (
          <Typography
            key={i}
            component="li"
            variant="body2"
            sx={{ lineHeight: 1.5 }}
          >
            {bullet}
          </Typography>
        ))}
      </Stack>
    </CardContent>
  </Card>
);

export default PortfolioProjectCard;