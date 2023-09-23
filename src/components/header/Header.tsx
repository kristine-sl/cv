import { AppBar, Box, Toolbar } from '@mui/material';
import { LocalizationProps, ThemeToggleProps } from '.';
import { Contact } from './Contact';
import { Formats } from './Formats';
import { Links } from './Links';
import { Localization } from './Localization';
import { ThemeToggle } from './ThemeToggle';

export type HeaderProps = {
  github?: string;
  linkedIn?: string;
  instagram?: string;
  email?: string;
} & LocalizationProps &
  ThemeToggleProps;

export const Header = ({
  github,
  linkedIn,
  instagram,
  email,
  theme,
  toggleTheme,
  ...localizationProps
}: HeaderProps) => (
  <AppBar
    position="sticky"
    elevation={1}
    sx={{ bgcolor: 'background.paper', displayPrint: 'none' }}
  >
    <Toolbar sx={{ gap: 1 }}>
      {(github || linkedIn || instagram) && (
        <>
          <Links github={github} linkedIn={linkedIn} instagram={instagram} />
          <Box sx={{ flexGrow: 1 }} />
        </>
      )}
      {email && <Contact email={email} />}
      <Box sx={{ flexGrow: 1, display: { sm: 'none' } }} />
      <Localization {...localizationProps} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Formats sx={{ display: { xs: 'none', sm: 'block' }, ml: -1 }} />
    </Toolbar>
  </AppBar>
);
