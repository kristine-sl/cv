import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FormattedMessage } from 'react-intl';
import { TimelineMarker } from './TimelineMarker';

interface TimelineItem {
  startYear: number;
  endYear?: number;
  title: string;
  subtitle: string;
  description?: string;
}

interface TimelineProps {
  data: TimelineItem[];
}

export const Timeline = ({ data }: TimelineProps) => {
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
          >
            {item.startYear} - {item.endYear}
          </Typography>
          <Typography
            variant="h3"
            sx={{ mt: (theme) => `calc(${theme.spacing(0.5)} - 4px)`, mb: 0.5 }}
          >
            <FormattedMessage id={item.title} />
          </Typography>
          <Typography variant="body2" sx={{ mb: item.description ? 2 : 0 }}>
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
};
