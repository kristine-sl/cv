import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FormattedMessage } from 'react-intl';

export const About = () => (
  <Box sx={{ px: 2, py: 3 }}>
    <Typography variant="body1">
      <FormattedMessage id="profile.about.description" />
    </Typography>
  </Box>
);
