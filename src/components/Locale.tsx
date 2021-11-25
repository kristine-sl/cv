import { ReactNode, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocale, update } from '../slices';

interface LocaleProps {
  nbNo: Record<string, string>;
  enUs: Record<string, string>;
  children: ReactNode;
}

export const Locale = ({ children, nbNo, enUs }: LocaleProps) => {
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
};
