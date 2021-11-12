import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FormattedMessage } from 'react-intl';

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

function TimelineMarker() {
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
}

function Timeline({ data }: TimelineProps) {
  return (
    <>
      {data.map((item, index) => (
        <Box
          sx={{
            ml: 1.5,
            pl: 3,
            pt: index === 0 ? 0 : 4,
            borderLeft: '2px solid transparent',
            borderColor: 'secondary.light',
            position: 'relative',
          }}
        >
          <TimelineMarker />
          <Typography
            variant="subtitle2"
            component="div"
            sx={{ position: 'relative', top: -4 }}
            color="secondary"
          >
            {item.startYear} - {item.endYear}
          </Typography>
          <Typography
            variant="h3"
            sx={{ mt: (theme) => `calc(${theme.spacing(0.5)} - 4px)`, mb: 0.5 }}
          >
            <FormattedMessage id={item.title} />
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: item.description ? 2 : 0 }}
            color="text.secondary"
          >
            <FormattedMessage id={item.subtitle} />
          </Typography>
          {item.description && (
            <Typography variant="body2">
              <FormattedMessage id={item.description} />
            </Typography>
          )}
        </Box>
      ))}
    </>
  );
}

export default Timeline;
