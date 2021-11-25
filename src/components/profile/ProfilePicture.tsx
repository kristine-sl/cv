import { Box } from '@mui/system';
import Image from 'next/image';
import { useIntl } from 'react-intl';

interface ProfilePictureProps {
  image: StaticImageData;
}

export const ProfilePicture = ({ image }: ProfilePictureProps) => {
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
