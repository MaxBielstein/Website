import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';

export type PortfolioSectionProps = {
  title: string;
  children: React.ReactNode;
};

// A titled section used to structure the Portfolio page. Keeps consistent
// spacing/heading styling so new sections can be added without duplication.
const PortfolioSection: React.FC<PortfolioSectionProps> = ({ title, children }) => (
  <Box component="section">
    <Typography
      variant="h5"
      component="h2"
      gutterBottom
      sx={{ fontWeight: 700, mb: 2 }}
    >
      {title}
    </Typography>
    <Stack spacing={2}>{children}</Stack>
  </Box>
);

export default PortfolioSection;
