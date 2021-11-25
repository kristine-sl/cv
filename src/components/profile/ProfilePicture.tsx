import { Box } from '@mui/system';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import image from '../../../public/images/profile_image.webp';

export const ProfilePicture = () => {
  const intl = useIntl();

  return (
    <Box
      sx={{
        borderRadius: '50%',
        width: '120px',
        height: '120px',
        marginBottom: 2,
        overflow: 'hidden',
      }}
    >
      <Image src={image} alt={intl.formatMessage({ id: 'profile.picture' })} />
    </Box>
  );
};
