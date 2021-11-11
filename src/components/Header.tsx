import { Github, Linkedin } from '@emotion-icons/fa-brands';
import { Email, Language } from '@emotion-icons/material';
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
import React from 'react';
import { FlagIcon } from 'react-flag-kit';
import { FormattedMessage } from 'react-intl';

function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={1}
        sx={{ bgcolor: 'background.paper' }}
      >
        <Toolbar>
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
            startIcon={<Icon component={Email} />}
            variant="outlined"
            color="secondary"
          >
            <FormattedMessage id="header.contact" />
          </Button>
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
            <MenuItem onClick={handleClose}>
              <FlagIcon code="NO" />
              <Box sx={{ ml: 1 }}>Norsk</Box>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <FlagIcon code="US" />
              <Box sx={{ ml: 1 }}>English</Box>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
