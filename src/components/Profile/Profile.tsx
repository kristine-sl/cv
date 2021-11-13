import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FormattedMessage } from 'react-intl';
import { About } from './About';
import { Info } from './Info';
import { ProfilePicture } from './ProfilePicture';
import { References } from './References';

export const Profile = () => {
  return (
    <Box sx={{ color: 'text.primary' }}>
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
};
