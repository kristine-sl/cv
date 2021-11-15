import { TimelineItem } from './TimelineItem';
import { TimelineItemData } from './timelineItemData';

interface TimelineProps {
  data: TimelineItemData[];
}

export const Timeline = ({ data }: TimelineProps) => (
  <>
    {data.map((item, index) => (
      <TimelineItem item={item} index={index} />
    ))}
  </>
);
