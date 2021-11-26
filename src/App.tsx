import { ThemeProviderProps } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { IntlProvider, ResolvedIntlConfig } from 'react-intl';
import { Header, HeaderProps, Main, MainProps } from './components';

type AppProps = {
  themes: {
    light: ThemeProviderProps['theme'];
    dark: ThemeProviderProps['theme'];
  };
  messages: { [locale: string]: ResolvedIntlConfig['messages'] };
} & HeaderProps &
  MainProps;

export const App = ({
  locale,
  messages,
  theme,
  themes,
  profile,
  image,
  categories,
  ...headerProps
}: AppProps) => {
  return (
    <ThemeProvider theme={themes[theme]}>
      <CssBaseline />
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Header {...headerProps} locale={locale} theme={theme} />
        <Main profile={profile} image={image} categories={categories} />
      </IntlProvider>
    </ThemeProvider>
  );
};
