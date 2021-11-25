import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../slices';

interface ThemeProps {
  children: ReactNode;
  lightTheme: object;
  darkTheme: object;
}

export const Theme = ({ children, lightTheme, darkTheme }: ThemeProps) => {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
