import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider as ReduxProvider } from 'react-redux';
import { Header } from '../components/header/Header';
import Locale from '../components/Locale';
import Theme from '../components/Theme';
import { store } from '../store';

function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <Theme>
        <Locale>
          <Head>
            <title>Kristine S. Lorentzen</title>
            <meta
              name="description"
              content="CV site for Kristine Sundt Lorentzen"
            />
          </Head>
          <Header />
          <Component {...pageProps} />
        </Locale>
      </Theme>
    </ReduxProvider>
  );
}

export default App;
