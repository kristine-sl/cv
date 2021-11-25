import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import enUs from '../../assets/lang/en-US.json';
import nbNo from '../../assets/lang/nb-NO.json';
import { Locale } from '../components/Locale';
import { Theme } from '../components/Theme';
import { store } from '../store';
import { darkTheme, lightTheme } from '../theme';
import { Meta } from './_meta';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ReduxProvider store={store}>
      <Theme lightTheme={lightTheme} darkTheme={darkTheme}>
        <Locale nbNo={nbNo} enUs={enUs}>
          <Meta />
          <Component {...pageProps} />
        </Locale>
      </Theme>
    </ReduxProvider>
  );
};

export default App;
