import * as React from 'react';
import { Card, CardContent, Box, Stack, Typography, Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { FeaturedProject } from '../data/portfolio';

export type FeaturedProjectCardProps = {
  project: FeaturedProject;
};

// Prominent, full-width hero card used to spotlight the standout project at the
// top of the Portfolio page. Uses a primary-colored accent border to stand out
// from the standard outlined cards used elsewhere.
const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ project }) => (
  <Card
    variant="outlined"
    sx={{
      bgcolor: 'background.default',
      borderColor: 'primary.main',
      borderWidth: 2,
    }}
  >
    <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
      <Stack spacing={2}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
          {project.name}
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {project.tagline}
        </Typography>

        <Stack component="ul" spacing={1} sx={{ m: 0, pl: 3 }}>
          {project.bullets.map((bullet, i) => (
            <Typography key={i} component="li" variant="body2" sx={{ lineHeight: 1.6 }}>
              {bullet}
            </Typography>
          ))}
        </Stack>

        <Box>
          <Button
            variant="contained"
            color="primary"
            href={project.link.url}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<LaunchIcon />}
          >
            {project.link.label}
          </Button>
        </Box>
      </Stack>
    </CardContent>
  </Card>
);

export default FeaturedProjectCard;
