import { Box } from '@mui/material';

export const TimelineMarker = () => (
  <Box
    sx={{
      width: '12px',
      height: '12px',
      bgcolor: 'secondary.main',
      borderRadius: '50%',
      position: 'absolute',
      left: '-7px',
      '@media print': {
        WebkitPrintColorAdjust: 'exact',
      },
    }}
  />
);
