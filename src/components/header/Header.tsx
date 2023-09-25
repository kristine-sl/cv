import { AppBar, Box, Toolbar, Menu, MenuItem } from '@mui/material';
import { LocalizationProps, ThemeToggleProps } from '.';
import { Contact } from './Contact';
import { CustomButton } from './CustomButton';
import { Formats } from './Formats';
import { Links } from './Links';
import { Localization } from './Localization';
import { ThemeToggle } from './ThemeToggle';
import * as React from 'react';

export type HeaderProps = {
  github?: string;
  linkedIn?: string;
  instagram?: string;
  headerLinks?: string[]
  email?: string;
} & LocalizationProps &
  ThemeToggleProps;

export const Header = ({
  github,
  linkedIn,
  instagram,
  headerLinks,
  email,
  theme,
  toggleTheme,
  ...localizationProps
}: HeaderProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
         {headerLinks && headerLinks.length > 0 && (
          <>
            <CustomButton
              id="basic-button"
              onClick={handleClick}
              messageId="header.portfolio"
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {headerLinks.map((link, index) => (
                <MenuItem key={index} onClick={handleClose} component="a" href={link}>
                  {link.replace('/', '').replace('-', ' ')}
                </MenuItem>
              ))}
            </Menu>
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
};