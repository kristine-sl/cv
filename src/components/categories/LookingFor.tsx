import { Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import data from '../../../assets/data/lookingFor.json';

export const LookingFor = () => (
  <ul>
    {data.points.map((item, index) => (
      <li key={index}>
        <Typography variant="body2">
          <FormattedMessage id={item} />
        </Typography>
      </li>
    ))}
  </ul>
);
