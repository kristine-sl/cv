import { blueGrey, deepOrange } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import App from './App';
import enUs from './lang/en-US.json';
import nbNo from './lang/nb-NO.json';
import reportWebVitals from './reportWebVitals';

const locale = navigator.language;

function getMessages() {
  if (locale === 'en') return enUs;
  return nbNo;
}

const theme = createTheme({
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
      fontWeight: 400,
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
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <IntlProvider locale={locale} messages={getMessages()}>
        <App />
      </IntlProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
