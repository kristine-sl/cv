import { createTheme } from '@mui/material';
import { blueGrey, deepOrange } from '@mui/material/colors';
import { typography } from './typography';

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: blueGrey[900],
    },
    secondary: {
      main: deepOrange['A700'],
      light: deepOrange[100],
    },
    background: {
      default: '#fafafa',
    },
  },
  typography: {
    ...typography,
    subtitle2: {
      ...typography.subtitle2, 
      color: deepOrange['A700']
    }, 
    body2: {
      ...typography.body2, 
      color: 'rgb(0,0,0,0.6)'
    }
  }
});