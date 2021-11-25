import Head from 'next/head';
import { useIntl } from 'react-intl';

export const Meta = () => {
  const intl = useIntl();

  return (
    <Head>
      <title>Kristine S. Lorentzen</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'contentDescription' })}
      />
    </Head>
  );
};
