import { Box } from '@mui/system';
import { ReactNode } from 'react';
import { useIntl } from 'react-intl';

export interface ProfilePictureProps {
  image: string | ReactNode;
}

export const ProfilePicture = ({ image }: ProfilePictureProps) => {
  const { formatMessage } = useIntl();

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
      {typeof image === 'string' ? (
        <img src={image} alt={formatMessage({ id: 'profile.picture' })} />
      ) : (
        image
      )}
    </Box>
  );
};
