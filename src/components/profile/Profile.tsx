import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FormattedMessage } from 'react-intl';
import { ProfilePictureProps } from '.';
import { About } from './about/About';
import { Info } from './info/Info';
import { ProfileData } from './profileData';
import { ProfilePicture } from './ProfilePicture';
import { References } from './references/References';

export type ProfileProps = {
  data: ProfileData;
} & ProfilePictureProps;

export const Profile = ({ image, data }: ProfileProps) => (
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
      <ProfilePicture image={image} />
      <Typography variant="h1">{data.name}</Typography>
      <Typography variant="subtitle1" component="span">
        <FormattedMessage id={data.jobTitle} />
      </Typography>
    </Box>
    <Divider variant="middle" />
    <About data={data.about} />
    <Divider variant="middle" />
    <Info data={data.info} />
    <Divider variant="middle" />
    <References />
  </Box>
);
