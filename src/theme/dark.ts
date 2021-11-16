import { createTheme } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { typography } from './typography';

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#2e2e2e',
    },
    secondary: {
      main: deepOrange[700],
      light: '#672500',
    },
    background: {
      default: '#191919',
    },
  },
  typography: {
    ...typography,
    subtitle2: {
      ...typography.subtitle2, 
      color: deepOrange[700]
    }, 
    body2: {
      ...typography.body2, 
      color: 'rgb(255,255,255,0.7)'
    }
  }
}); 