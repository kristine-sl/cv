import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FormattedMessage } from 'react-intl';

export const References = () => (
  <Box sx={{ px: 2, pt: 3 }}>
    <Typography variant="body1" color="text.secondary">
      <FormattedMessage id="profile.references.description" />
    </Typography>
  </Box>
);
