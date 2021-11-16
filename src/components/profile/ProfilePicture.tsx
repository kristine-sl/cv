import { Box } from '@mui/system';
import Image from 'next/image';
import image from '../../../public/images/profile_image.webp';

export const ProfilePicture = () => (
  <Box
    sx={{
      borderRadius: '50%',
      width: '120px',
      height: '120px',
      marginBottom: 2,
      overflow: 'hidden',
    }}
  >
    <Image src={image} alt="Kristine S. Lorentzen" />
  </Box>
);
