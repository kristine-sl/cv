import { AppBar, Box, Toolbar } from '@mui/material';
import { Contact } from './Contact';
import { Formats } from './Formats';
import { Links } from './Links';
import { Localization } from './Localization';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => (
  <AppBar
    position="sticky"
    elevation={1}
    sx={{ bgcolor: 'background.paper', displayPrint: 'none' }}
  >
    <Toolbar sx={{ gap: 1 }}>
      <Links />
      <Box sx={{ flexGrow: 1 }} />
      <Contact />
      <Box sx={{ flexGrow: 1, display: { sm: 'none' } }} />
      <Localization />
      <ThemeToggle />
      <Formats sx={{ display: { xs: 'none', sm: 'block' }, ml: -1 }} />
    </Toolbar>
  </AppBar>
);
