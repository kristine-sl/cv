import { createTheme } from '@mui/material';
import { blueGrey, deepOrange } from '@mui/material/colors';

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: blueGrey[900],
    },
    secondary: {
      main: deepOrange['A700'],
      light: deepOrange[100],
    },
    background: {
      default: '#fafafa',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    htmlFontSize: 12,
    fontSize: 12,
    h1: {
      fontFamily: 'Red Hat Display',
      fontSize: '2rem',
      fontWeight: 400,
      letterSpacing: '0.03em',
    },
    h2: {
      fontFamily: 'Red Hat Display',
      fontSize: '1.2rem',
      fontWeight: 500,
      letterSpacing: '0.03em',
    },
    h3: {
      fontFamily: 'Red Hat Display',
      fontSize: '1.1rem',
      fontWeight: 500,
      lineHeight: '1.5',
      letterSpacing: '0.03em',
    },
    h4: {
      fontFamily: 'Red Hat Display',
      fontSize: '1rem',
      letterSpacing: '0.03em',
    },
    h5: {
      fontFamily: 'Red Hat Display',
      letterSpacing: '0.03em',
    },
    h6: {
      fontFamily: 'Red Hat Display',
      letterSpacing: '0.03em',
    },
    subtitle1: {
      fontFamily: 'Red Hat Display',
      letterSpacing: '0.03em',
    },
    subtitle2: {
      fontFamily: 'Red Hat Display',
      fontWeight: 500,
      fontSize: '0.9rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    button: {
      fontFamily: 'Red Hat Display',
      fontSize: '0.9rem',
      letterSpacing: '0.05em',
    },
    overline: {
      fontFamily: 'Red Hat Display',
      letterSpacing: '0.03em',
    },
    body1: {
      fontFamily: 'Red Hat Display',
      fontSize: '1rem',
      letterSpacing: '0.03em',
    },
    body2: {
      fontFamily: 'Red Hat Display',
      fontSize: '0.9rem',
      lineHeight: '1.6',
      letterSpacing: '0.03em',
    },
  },
});

export const darkTheme = createTheme({...lightTheme,
  palette: {
    mode: "dark",
    primary: {
      main: '#2e2e2e',
    },
    secondary: {
      main: deepOrange[700],
      light: '#672000',
    },
    background: {
      default: '#191919',
    },
  }
}); 