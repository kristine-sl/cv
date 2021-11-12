import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import image from '../../images/profile_image.webp';
import About from './About';
import Info from './Info';
import References from './References';

function ProfilePicture() {
  return (
    <Box
      sx={{
        borderRadius: '50%',
        border: '1px solid #999',
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'contain',
        width: '120px',
        height: '120px',
        marginBottom: 2,
      }}
    />
  );
}

function Profile() {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          py: 4,
        }}
      >
        <ProfilePicture />
        <Typography variant="h1">Kristine S. Lorentzen</Typography>
        <Typography variant="subtitle1" component="span">
          <FormattedMessage id="profile.jobTitle" />
        </Typography>
      </Box>
      <Divider variant="middle" />
      <About />
      <Divider variant="middle" />
      <Info />
      <Divider variant="middle" />
      <References />
    </Box>
  );
}

export default Profile;
