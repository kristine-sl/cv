import { TypographyOptions } from '@mui/material/styles/createTypography';

export const typography: TypographyOptions = {
  fontFamily: ['Red Hat Display', 'sans-serif'].join(','),
  fontSize: 12,
  htmlFontSize: 12,
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
    letterSpacing: '0.03em',
    lineHeight: '1.5',
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
    letterSpacing: '0.05em',
    lineHeight: '1.5',
    textTransform: 'uppercase',
  },
  button: {
    fontSize: '0.9rem',
    fontWeight: 700,
    letterSpacing: '0.05em',
  },
  body1: {
    fontSize: '1rem',
    letterSpacing: '0.03em',
    lineHeight: '1.8',
  },
  body2: {
    fontSize: '0.9rem',
    letterSpacing: '0.03em',
    lineHeight: '1.6',
  },
}