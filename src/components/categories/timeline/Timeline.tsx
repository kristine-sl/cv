import { Box } from '@mui/system';
import { useCategoryHeader } from '../CategoryContext';
import { CategoryHeader } from '../CategoryHeader';
import { TimelineItem } from './TimelineItem';
import { TimelineItemData } from './timelineItemData';

interface TimelineProps {
  data: TimelineItemData[];
}

export const Timeline = ({ data }: TimelineProps) => {
  const header = useCategoryHeader();

  return (
    <>
      {data.map((item, index) => (
        <Box
          sx={{
            '@media print': {
              breakInside: 'avoid',
            },
          }}
        >
          {header && index === 0 && <CategoryHeader {...header} />}
          <TimelineItem key={index} index={index} item={item} />
        </Box>
      ))}
    </>
  );
};
