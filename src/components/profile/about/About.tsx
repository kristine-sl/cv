import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FormattedMessage } from 'react-intl';

interface AboutProps {
  data: string;
}

export const About = ({ data }: AboutProps) => (
  <Box sx={{ px: 2, py: 3 }}>
    <Typography variant="body1">
      <FormattedMessage id={data} />
    </Typography>
  </Box>
);
