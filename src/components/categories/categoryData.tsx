import { ArticleData } from './articles/articleData';
import { CategoryHeaderProps } from './CategoryHeader';
import { TimelineItemData } from './timeline/timelineItemData';

export type CategoryData = {
  order: number | Record<string, number>;
} & CategoryHeaderProps &
  (
    | {
        type: 'articles';
        data: ArticleData[];
      }
    | {
        type: 'timeline';
        data: TimelineItemData[];
      }
    | {
        type: 'list';
        data: string[];
      }
  );
