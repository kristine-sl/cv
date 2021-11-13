import { Email, Phone, Place } from '@emotion-icons/material-outlined';
import { Icon, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FormattedMessage } from 'react-intl';

export const Info = () => {
  return (
    <Box
      sx={{
        px: 2,
        py: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Icon component={Place} sx={{ mr: 2, color: 'text.disabled' }}></Icon>
        <Typography variant="body1">
          <FormattedMessage id="profile.info.location" />
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Icon component={Email} sx={{ mr: 2, color: 'text.disabled' }}></Icon>
        <Typography variant="body1">
          kristine.sundt.lorentzen@gmail.com
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Icon component={Phone} sx={{ mr: 2, color: 'text.disabled' }}></Icon>
        <Typography variant="body1">+47 932 16 768</Typography>
      </Box>
    </Box>
  );
};
