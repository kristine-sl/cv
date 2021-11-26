import {
  Cake,
  Email,
  PhoneIphone,
  Place,
} from '@emotion-icons/material-outlined';
import { Icon, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FormattedMessage } from 'react-intl';
import { InfoData } from './infoData';

interface InfoProps {
  data: InfoData;
}

export const Info = ({ data }: InfoProps) => {
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
      {data.age && (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon component={Cake} sx={{ mr: 2, color: 'text.disabled' }}></Icon>
          <Typography variant="body1">
            <FormattedMessage
              id="profile.info.age"
              values={{ age: data.age }}
            />
          </Typography>
        </Box>
      )}

      {data.location && (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon component={Place} sx={{ mr: 2, color: 'text.disabled' }}></Icon>
          <Typography variant="body1">
            <FormattedMessage id={data.location} />
          </Typography>
        </Box>
      )}

      {data.email && (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon component={Email} sx={{ mr: 2, color: 'text.disabled' }}></Icon>
          <Typography variant="body1">{data.email}</Typography>
        </Box>
      )}

      {data.phoneNumber && (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon
            component={PhoneIphone}
            sx={{ mr: 2, color: 'text.disabled' }}
          />
          <Typography variant="body1">{data.phoneNumber}</Typography>
        </Box>
      )}
    </Box>
  );
};
