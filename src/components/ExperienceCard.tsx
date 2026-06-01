import * as React from 'react';
import { Card, CardContent, Box, Stack, Typography, Divider } from '@mui/material';
import { Experience } from '../data/portfolio';

export type ExperienceCardProps = {
  experience: Experience;
};

// Renders a single company and all roles held there. Multiple roles are
// separated by dividers so career progression within one company reads clearly.
const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => (
  <Card variant="outlined" sx={{ bgcolor: 'background.default' }}>
    <CardContent>
      <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
        {experience.company}
      </Typography>

      <Stack spacing={2} sx={{ mt: 1 }} divider={<Divider flexItem />}>
        {experience.roles.map((role) => (
          <Box key={`${role.title}-${role.period}`}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {role.title}
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 0, sm: 1 }}
              sx={{ color: 'text.secondary', mb: 1 }}
              divider={
                <Box
                  component="span"
                  sx={{ display: { xs: 'none', sm: 'block' } }}
                  aria-hidden
                >
                  •
                </Box>
              }
            >
              <Typography variant="body2">{role.period}</Typography>
              <Typography variant="body2">{role.location}</Typography>
            </Stack>
            <Stack component="ul" spacing={0.75} sx={{ m: 0, pl: 2.5 }}>
              {role.bullets.map((bullet, i) => (
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
          </Box>
        ))}
      </Stack>
    </CardContent>
  </Card>
);

export default ExperienceCard;