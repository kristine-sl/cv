import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import { FormattedMessage } from 'react-intl';
import data from '../../../assets/data/lookingFor.json';

export const LookingFor = () => {
  const theme = useTheme();

  return (
    <Box
      component="ul"
      sx={{
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        pl: 3.5,
      }}
    >
      {data.points.map((item, index) => (
        <Box
          component="li"
          key={index}
          sx={{
            '&::marker': {
              color: theme.palette.secondary.main,
              fontSize: '0.8rem',
            },
          }}
        >
          <Typography variant="body2">
            <FormattedMessage id={item} />
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
