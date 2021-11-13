import { Github, Linkedin } from '@emotion-icons/fa-brands';
import { Language } from '@emotion-icons/material';
import { DarkMode, LightMode } from '@emotion-icons/material-outlined';
import {
  AppBar,
  Box,
  Button,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from '@mui/material';
import React, { MouseEvent, useState } from 'react';
import { FlagIcon } from 'react-flag-kit';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { LocaleState, update } from '../store/localeSlice';
import { selectTheme, toggle } from '../store/themeSlice';

function Header() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const setLocale = (locale: LocaleState) => {
    dispatch(update(locale));
    handleClose();
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={1}
        sx={{ bgcolor: 'background.paper' }}
      >
        <Toolbar sx={{ gap: 1 }}>
          <IconButton
            href="https://www.linkedin.com/in/kristinesundtlorentzen/"
            color="secondary"
            aria-label="LinkedIn.com"
          >
            <Icon component={Linkedin} />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/kristinesundtlorentzen/"
            color="secondary"
            aria-label="Github.com"
          >
            <Icon component={Github} />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            href="mailto:kristine.sundt.lorentzen@gmail.com"
            variant="contained"
            color="secondary"
            disableElevation
          >
            <FormattedMessage id="header.contact" />
          </Button>
          <Box sx={{ flexGrow: 1, display: { md: 'none' } }} />
          <IconButton
            color="secondary"
            id="language-button"
            aria-label="Change language"
            aria-controls={open ? 'language-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <Icon component={Language} />
          </IconButton>
          <Menu
            id="language-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'language-button',
            }}
          >
            <MenuItem onClick={() => setLocale('no')}>
              <FlagIcon code="NO" />
              <Box sx={{ ml: 1 }}>Norsk</Box>
            </MenuItem>
            <MenuItem onClick={() => setLocale('en')}>
              <FlagIcon code="US" />
              <Box sx={{ ml: 1 }}>English</Box>
            </MenuItem>
          </Menu>
          <IconButton
            color="secondary"
            aria-label="Github.com"
            onClick={() => dispatch(toggle())}
          >
            <Icon component={theme === 'light' ? DarkMode : LightMode} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
