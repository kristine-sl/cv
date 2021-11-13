import { Box } from '@mui/material';

export const TimelineMarker = () => {
  return (
    <Box
      sx={{
        width: '12px',
        height: '12px',
        bgcolor: 'secondary.main',
        borderRadius: '50%',
        position: 'absolute',
        left: '-7px',
      }}
    />
  );
};
