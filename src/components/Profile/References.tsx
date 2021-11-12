import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FormattedMessage } from 'react-intl';

function References() {
  return (
    <Box sx={{ pt: 4, px: 2, pb: 2 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        <FormattedMessage id="profile.references" />
      </Typography>
      <Typography variant="body1">
        <FormattedMessage id="profile.references.description" />
      </Typography>
    </Box>
  );
}

export default References;
