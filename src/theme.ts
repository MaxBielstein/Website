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
        '::-webkit-scrollbar': {
          width: '14px', // slightly wider than before
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: '#101423',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(158,170,255,0.4)', // primary on theme
          borderRadius: 6,
          border: '2px solid #101423',
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: 'rgba(158,170,255,0.7)',
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
