import { ChevronLeft } from '@emotion-icons/material-outlined';
import { AppBar, Box, Icon, IconButton, Toolbar } from '@mui/material';
import { LocalizationProps, ThemeToggleProps } from '.';
import { Contact } from './Contact';
import { Formats } from './Formats';
import HeaderLinks, { HeaderLinksProps } from './HeaderLinks';
import { Links } from './Links';
import { Localization } from './Localization';
import { ThemeToggle } from './ThemeToggle';

export type HeaderProps = {
  github?: string;
  linkedIn?: string;
  instagram?: string;
  email?: string;
  subsite?: boolean;
} & LocalizationProps &
  ThemeToggleProps &
  HeaderLinksProps;

export const Header = ({
  github,
  linkedIn,
  instagram,
  headerLinks,
  email,
  subsite,
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
      {subsite ? (
        <>
          <IconButton href="/" color="secondary" aria-label="Tilbake">
            <Icon component={ChevronLeft} />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <HeaderLinks headerLinks={headerLinks} />
        </>
      ) : (
        <>
          {(github || linkedIn || instagram) && (
            <>
              <Links
                github={github}
                linkedIn={linkedIn}
                instagram={instagram}
              />
              <Box sx={{ flexGrow: 1 }} />
            </>
          )}
          {headerLinks && headerLinks.length > 0 && (
            <HeaderLinks headerLinks={headerLinks} />
          )}
          {email && <Contact email={email} />}
          <Box sx={{ flexGrow: 1, display: { sm: 'none' } }} />
          <Localization {...localizationProps} />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <Formats sx={{ display: { xs: 'none', sm: 'block' }, ml: -1 }} />
        </>
      )}
    </Toolbar>
  </AppBar>
);
