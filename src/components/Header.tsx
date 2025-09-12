import React from 'react';
import { AppBar, Toolbar, Container, Box, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.scss';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Current Projects', to: '/project-tracker' },
  { label: 'Portfolio', to: '/portfolio' },
];

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <AppBar position="fixed" color="transparent" elevation={0} className="appBar">
      <Container maxWidth="lg">
        <Toolbar disableGutters className="toolbar">
          <Box component="nav" aria-label="Primary" className="nav">
            {navItems.map((item) => (
              <Button
                key={item.to}
                size="medium"
                className={`navButton${pathname === item.to ? ' is-active' : ''}`}
                onClick={() => navigate(item.to)}
                role="link"
                aria-current={pathname === item.to ? 'page' : undefined}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
