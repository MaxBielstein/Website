import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#9eaaff' },
    background: { default: '#000000' },
    text: { primary: '#ffffff' },
  },
  typography: {
    fontFamily: 'Arial, system-ui, sans-serif',
    h3: { fontWeight: 700 },
    body1: { fontSize: '1.1rem', lineHeight: 1.6 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [
          {
            fontFamily: 'mechanismo',
            src: "url('/fonts/Mechanismo.otf') format('opentype')",
            fontDisplay: 'swap',
          },
        ],
        body: {
          margin: 0,
          background: 'radial-gradient(ellipse at center, rgba(34, 34, 71, 1) 0%, #000000ff 105%)',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          color: '#ffffff',
          overflowX: 'hidden',
        },
        '::-webkit-scrollbar': { width: '8px' },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(255,255,255,0.15)',
          borderRadius: 4,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { background: 'transparent', boxShadow: 'none' },
      },
    },
  },
});
