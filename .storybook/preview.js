import { createTheme, CssBaseline } from '@mui/material';
import { blueGrey, deepOrange } from '@mui/material/colors';
import { ThemeProvider } from '@mui/system';
import { addDecorator } from '@storybook/react';
import { IntlProvider } from 'react-intl';
import messages from './enUs.json';

const theme = createTheme({
  palette: {
    mode: 'light',
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
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
      letterSpacing: '0.03em',
    },
    h2: {
      fontSize: '1.2rem',
      fontWeight: 500,
      letterSpacing: '0.03em',
    },
    h3: {
      fontSize: '1.1rem',
      fontWeight: 500,
      letterSpacing: '0.03em',
      lineHeight: '1.5',
    },
    h4: {
      fontSize: '1rem',
      letterSpacing: '0.03em',
    },
    h5: {
      letterSpacing: '0.03em',
    },
    h6: {
      letterSpacing: '0.03em',
    },
    subtitle1: {
      letterSpacing: '0.03em',
    },
    subtitle2: {
      color: deepOrange['A700'],
      fontWeight: 500,
      fontSize: '0.9rem',
      letterSpacing: '0.05em',
      lineHeight: '1.5',
      textTransform: 'uppercase',
    },
    button: {
      fontSize: '0.9rem',
      fontWeight: 700,
      letterSpacing: '0.05em',
    },
    body1: {
      fontSize: '1rem',
      letterSpacing: '0.03em',
      lineHeight: '1.8',
    },
    body2: {
      color: 'rgb(0,0,0,0.6)',
      fontSize: '0.9rem',
      letterSpacing: '0.03em',
      lineHeight: '1.6',
    },
  },
});

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
};

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <IntlProvider locale="en" messages={messages}>
      {story()}
    </IntlProvider>
  </ThemeProvider>
));
