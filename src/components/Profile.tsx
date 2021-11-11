import { Email, Phone, Place } from '@emotion-icons/material-outlined';
import { Divider, Icon, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import image from '../images/profile_image.webp';

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
        <Typography variant="h1">Kristine S. Lorentzen</Typography>
        <Typography variant="subtitle1">
          <FormattedMessage id="profile.jobTitle" />
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ pt: 4, px: 2, pb: 2 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          <FormattedMessage id="profile.about" />
        </Typography>
        <Typography variant="body1">
          <FormattedMessage id="profile.about.description" />
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ pt: 4, px: 2, pb: 2 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          <FormattedMessage id="profile.info" />
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Icon component={Place} sx={{ mr: 2, opacity: '0.5' }}></Icon>
          <Typography variant="body1">
            <FormattedMessage id="profile.info.location" />
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Icon component={Email} sx={{ mr: 2, opacity: '0.5' }}></Icon>
          <Typography variant="body1">
            kristine.sundt.lorentzen@gmail.com
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Icon component={Phone} sx={{ mr: 2, opacity: '0.5' }}></Icon>
          <Typography variant="body1">+47 932 16 768</Typography>
        </Box>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ pt: 4, px: 2, pb: 2 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          <FormattedMessage id="profile.references" />
        </Typography>
        <Typography variant="body1">
          <FormattedMessage id="profile.references.description" />
        </Typography>
      </Box>
    </Box>
  );
}

export default Profile;
