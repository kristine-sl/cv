import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

interface TimelineItem {
  startYear: number;
  endYear?: number;
  title: string;
  subtitle: string;
  description?: string;
}

export interface TimelineProps {
  data: TimelineItem[];
}

function Timeline({ data }: TimelineProps) {
  return (
    <Grid container direction="column">
      {data.map((item, index) => (
        <Grid
          item
          sx={{
            ml: 1.5,
            pl: 3,
            pt: index === 0 ? 0 : 4,
            borderLeft: '2px solid transparent',
            borderColor: 'secondary.light',
            position: 'relative',
          }}
        >
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
          <Typography variant="body2" sx={{ mt: '-2px' }}>
            {item.startYear} - {item.endYear}
          </Typography>
          <Typography variant="h3">{item.title}</Typography>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            {item.subtitle}
          </Typography>
          <Typography variant="body2">{item.description}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default Timeline;
