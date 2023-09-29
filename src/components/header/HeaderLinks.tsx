import { Menu, MenuItem } from '@mui/material';
import React from 'react';
import { CustomButton } from './CustomButton';

export interface HeaderLinksProps {
  headerLinks?: string[];
}

// Captitalize first letter and remove / and -
const sanitize = (link: string) => {
  const santizedLink = link.replace('/', '').replace('-', ' ');
  return santizedLink.charAt(0).toUpperCase() + santizedLink.slice(1);
};

const HeaderLinks = ({ headerLinks }: HeaderLinksProps) => {
  if (!headerLinks || headerLinks.length === 0) return null;

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
            {sanitize(link)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default HeaderLinks;
