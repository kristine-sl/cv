import { createTheme } from '@mui/material';
import { blueGrey, deepOrange } from '@mui/material/colors';
import { TypographyOptions } from '@mui/material/styles/createTypography';

const typography: TypographyOptions = {
  fontFamily: ['Red Hat Display', 'sans-serif'].join(','),
  htmlFontSize: 12,
  fontSize: 12,
  h1: {
    fontSize: '2rem',
    fontWeight: 500,
    letterSpacing: '0.03em',
  },
  h2: {
    fontSize: '1.2rem',
    fontWeight: 500,
    letterSpacing: '0.03em',
  },
  h3: {
    fontSize: '1.1rem',
    fontWeight: 500,
    lineHeight: '1.5',
    letterSpacing: '0.03em',
  },
  h4: {
    fontSize: '1rem',
    letterSpacing: '0.03em',
  },
  h5: {
    letterSpacing: '0.03em',
  },
  h6: {
    letterSpacing: '0.03em',
  },
  subtitle1: {
    letterSpacing: '0.03em',
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    lineHeight: '1.5',
  },
  button: {
    fontSize: '0.9rem',
    letterSpacing: '0.05em',
  },
  overline: {
    letterSpacing: '0.03em',
    fontWeight: 500,
    fontSize: '0.8rem',
  },
  body1: {
    fontSize: '1rem',
    letterSpacing: '0.03em',
    lineHeight: '1.8',
  },
  body2: {
    fontSize: '0.9rem',
    lineHeight: '1.6',
    letterSpacing: '0.03em',
  },
}

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