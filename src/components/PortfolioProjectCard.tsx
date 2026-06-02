import * as React from 'react';
import { Card, CardContent, Stack, Typography, Link } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { PortfolioProject } from '../data/portfolio';

export type PortfolioProjectCardProps = {
  project: PortfolioProject;
};

// Renders a single project. Bullets and an external link are both optional so
// the same card works for full write-ups and brief, link-only entries.
const PortfolioProjectCard: React.FC<PortfolioProjectCardProps> = ({ project }) => (
  <Card variant="outlined" sx={{ bgcolor: 'background.default', height: '100%' }}>
    <CardContent>
      <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
        {project.name}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: project.bullets ? 1.5 : 0 }}>
        {project.tagline}
      </Typography>

      {project.bullets && (
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
      )}

      {project.link && (
        <Link
          href={project.link.url}
          target="_blank"
          rel="noopener noreferrer"
          underline="always"
          sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontWeight: 600, mt: 1.5 }}
        >
          {project.link.label} <LaunchIcon fontSize="small" />
        </Link>
      )}
    </CardContent>
  </Card>
);

export default PortfolioProjectCard;
