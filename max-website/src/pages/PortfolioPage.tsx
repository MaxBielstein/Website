import React from 'react';
import { Typography } from '@mui/material';
import Page from '../components/Page';

const PortfolioPage: React.FC = () => {
  return (
    <Page maxWidth="md" center>
      <Typography variant="h3" component="h1" gutterBottom>
        Portfolio
      </Typography>
      <Typography variant="body1">Coming soon…</Typography>
    </Page>
  );
};

export default PortfolioPage;
