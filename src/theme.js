import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#C62828',
      light: '#E53935',
      dark: '#8E0000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0d0d0f',
      light: '#1a1a1d',
      dark: '#050506',
      contrastText: '#f5f0eb',
    },
    background: {
      default: '#0d0d0f',
      paper: '#141416',
    },
    text: {
      primary: '#f5f0eb',
      secondary: '#9e9a93',
    },
    divider: 'rgba(198, 40, 40, 0.15)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Oswald", "Inter", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: '"Oswald", "Inter", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.03em',
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: '"Oswald", "Inter", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    h4: {
      fontFamily: '"Oswald", "Inter", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.02em',
      fontSize: '2rem',
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    body1: {
      lineHeight: 1.75,
    },
    overline: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.15em',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontFamily: '"Inter", sans-serif',
          letterSpacing: '0.04em',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          color: '#C62828',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Inter", sans-serif',
        },
      },
    },
  },
});

export default theme;
