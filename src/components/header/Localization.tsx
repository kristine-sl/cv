import { Language } from '@emotion-icons/material';
import {
  Box,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { MouseEvent, useState } from 'react';
import { FlagIcon } from 'react-flag-kit';

export interface LocalizationProps {
  locale: string;
  updateLocale: (locale: string) => void;
}

export const Localization = ({ locale, updateLocale }: LocalizationProps) => {
  const setLocale = (locale: string) => {
    updateLocale(locale);
    handleClose();
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
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
          <Box sx={{ ml: 1 }}>
            <Typography
              sx={{
                fontWeight: locale === 'no' ? 500 : 400,
                color: locale === 'no' ? 'text.primary' : 'text.secondary',
              }}
            >
              Norsk
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem onClick={() => setLocale('en')}>
          <FlagIcon code="US" />
          <Box sx={{ ml: 1 }}>
            <Typography
              sx={{
                fontWeight: locale === 'en' ? 500 : 400,
                color: locale === 'en' ? 'text.primary' : 'text.secondary',
              }}
            >
              English
            </Typography>
          </Box>
        </MenuItem>
      </Menu>
    </>
  );
};
