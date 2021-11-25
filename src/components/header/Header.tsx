import { AppBar, Box, Toolbar } from '@mui/material';
import { Contact } from './Contact';
import { Formats } from './Formats';
import { Links } from './Links';
import { Localization } from './Localization';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  github?: string;
  linkedIn?: string;
  email?: string;
}

export const Header = ({ github, linkedIn, email }: HeaderProps) => (
  <AppBar
    position="sticky"
    elevation={1}
    sx={{ bgcolor: 'background.paper', displayPrint: 'none' }}
  >
    <Toolbar sx={{ gap: 1 }}>
      {(github || linkedIn) && (
        <>
          <Links github={github} linkedIn={linkedIn} />
          <Box sx={{ flexGrow: 1 }} />
        </>
      )}

      {email && <Contact email={email} />}

      <Box sx={{ flexGrow: 1, display: { sm: 'none' } }} />
      <Localization />
      <ThemeToggle />
      <Formats sx={{ display: { xs: 'none', sm: 'block' }, ml: -1 }} />
    </Toolbar>
  </AppBar>
);
