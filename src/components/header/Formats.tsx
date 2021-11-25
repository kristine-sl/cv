import {
  FileDownload,
  MoreVert,
  Print,
} from '@emotion-icons/material-outlined';
import {
  Box,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { SxProps } from '@mui/system';
import { MouseEvent, useState } from 'react';
import { FormattedMessage } from 'react-intl';

interface FormatsProps {
  sx: SxProps;
}

export const Formats = ({ sx }: FormatsProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={sx}>
      <IconButton
        color="secondary"
        id="language-button"
        aria-label="Change language"
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Icon component={MoreVert} />
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
        <MenuItem
          disabled
          onClick={() => {
            handleClose();
            console.log('download');
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Icon
              component={FileDownload}
              sx={{ mr: 2, color: (theme) => theme.palette.secondary.main }}
            />
            <Typography>
              <FormattedMessage id="header.download" />
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem
          onClick={() => {
            window.print();
            handleClose();
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Icon
              component={Print}
              sx={{ mr: 2, color: (theme) => theme.palette.secondary.main }}
            />
            <Typography>
              <FormattedMessage id="header.print" />
            </Typography>
          </Box>
        </MenuItem>
      </Menu>
    </Box>
  );
};
