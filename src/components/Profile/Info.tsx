import { Email, Phone, Place } from '@emotion-icons/material-outlined';
import { Icon, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FormattedMessage } from 'react-intl';

function Info() {
  return (
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
  );
}

export default Info;
