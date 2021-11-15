import { Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import data from '../../assets/data/lookingFor.json';

export const LookingFor = () => (
  <Typography variant="body2">
    {data.points.map((item) => (
      <ul>
        <li>
          <FormattedMessage id={item} />
        </li>
      </ul>
    ))}
  </Typography>
);
