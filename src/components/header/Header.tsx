import { AppBar, Box, Toolbar } from '@mui/material';
import { Contact } from './Contact';
import { Links } from './Links';
import { Localization } from './Localization';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => (
  <AppBar position="sticky" elevation={1} sx={{ bgcolor: 'background.paper' }}>
    <Toolbar sx={{ gap: 1 }}>
      <Links />
      <Box sx={{ flexGrow: 1 }} />
      <Contact />
      <Box sx={{ flexGrow: 1, display: { md: 'none' } }} />
      <Localization />
      <ThemeToggle />
    </Toolbar>
  </AppBar>
);
