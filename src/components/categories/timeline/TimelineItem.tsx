import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FormattedMessage } from 'react-intl';
import { TimelineItemData } from './timelineItemData';
import { TimelineMarker } from './TimelineMarker';

interface TimelineItemProps {
  item: TimelineItemData;
  index: number;
}

export const TimelineItem = ({ item, index }: TimelineItemProps) => (
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
    {item.keywords && (
      <Typography
        component="div"
        variant="body2"
        sx={{ mt: 2, fontStyle: 'italic' }}
      >
        <Box sx={{ fontWeight: '500', mr: 0.5 }} component="span">
          <FormattedMessage id="keywords" />
          <span>:</span>
        </Box>
        <FormattedMessage id={item.keywords} />
      </Typography>
    )}
  </Box>
);
