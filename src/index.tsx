import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import App from './App';
import enUs from './lang/en-US.json';
import nbNo from './lang/nb-NO.json';
import reportWebVitals from './reportWebVitals';
import { theme } from './theme';

const locale = navigator.language;

function getMessages() {
  if (locale === 'en') return enUs;
  return nbNo;
}

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
