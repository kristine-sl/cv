import { ReactNode, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import enUs from '../../assets/lang/en-US.json';
import nbNo from '../../assets/lang/nb-NO.json';
import { selectLocale, update } from '../slices';

interface LocaleProps {
  children: ReactNode;
}

function Locale({ children }: LocaleProps) {
  const locale = useSelector(selectLocale);
  const dispatch = useDispatch();

  useEffect(() => {
    if (navigator.language === 'en') {
      dispatch(update('en'));
    }
  }, [dispatch]);

  return (
    <IntlProvider locale={locale} messages={locale === 'no' ? nbNo : enUs}>
      {children}
    </IntlProvider>
  );
}

export default Locale;