// App.tsx
import * as React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import Layout from './layout/Layout';
import AboutPage from './pages/AboutPage';
import ProjectTrackerPage from './pages/ProjectTrackerPage';
import PortfolioPage from './pages/PortfolioPage';

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<AboutPage />} />
              <Route path="/project-tracker" element={<ProjectTrackerPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
