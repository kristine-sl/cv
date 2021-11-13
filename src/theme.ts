import { createTheme } from '@mui/material';
import { blueGrey, deepOrange } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
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
    },
    h2: {
      fontFamily: 'Red Hat Display',
      fontSize: '1.2rem',
      fontWeight: 500,
    },
    h3: {
      fontFamily: 'Red Hat Display',
      fontSize: '1.1rem',
      fontWeight: 500,
      lineHeight: '1.5',
    },
    h4: {
      fontFamily: 'Red Hat Display',
      fontSize: '1rem',
    },
    h5: {
      fontFamily: 'Red Hat Display',
    },
    h6: {
      fontFamily: 'Red Hat Display',
    },
    subtitle1: {
      fontFamily: 'Red Hat Display',
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
    },
    overline: {
      fontFamily: 'Red Hat Display',
    },
    body1: {
      fontFamily: 'Red Hat Display',
      fontSize: '1rem',
    },
    body2: {
      fontFamily: 'Red Hat Display',
      fontSize: '0.9rem',
      lineHeight: '1.55',
    },
  },
});
