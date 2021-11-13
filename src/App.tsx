import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import React, { useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import Content from './components/Content';
import Header from './components/Header';
import enUs from './lang/en-US.json';
import nbNo from './lang/nb-NO.json';
import { selectLocale, update } from './store/localeSlice';
import { selectTheme } from './store/themeSlice';
import { darkTheme, lightTheme } from './theme';

function App() {
  const theme = useSelector(selectTheme);
  const locale = useSelector(selectLocale);
  const dispatch = useDispatch();

  useEffect(() => {
    if (navigator.language === 'en') {
      dispatch(update('en'));
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <IntlProvider locale={locale} messages={locale === 'no' ? nbNo : enUs}>
        <CssBaseline />
        <Header />
        <Content />
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
