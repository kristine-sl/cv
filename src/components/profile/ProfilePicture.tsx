import { Box } from '@mui/system';
import image from '../../assets/img/profile_image.webp';

export const ProfilePicture = () => {
  return (
    <Box
      sx={{
        borderRadius: '50%',
        border: '1px solid #999',
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'contain',
        width: '120px',
        height: '120px',
        marginBottom: 2,
      }}
    />
  );
};
