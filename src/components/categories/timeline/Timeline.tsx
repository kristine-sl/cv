import { TimelineItem } from './TimelineItem';
import { TimelineItemData } from './timelineItemData';

interface TimelineProps {
  data: TimelineItemData[];
}

export const Timeline = ({ data }: TimelineProps) => (
  <>
    {data.map((item, index) => (
      <TimelineItem key={index} index={index} item={item} />
    ))}
  </>
);
