import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../slices';
import { darkTheme, lightTheme } from '../theme';

interface ThemeProps {
  children: ReactNode;
}

export const Theme = ({ children }: ThemeProps) => {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
