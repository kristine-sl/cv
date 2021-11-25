import { Grid } from '@mui/material';
import { Article } from './Article';
import { ArticleData } from './articleData';
import { useCategoryHeader } from '../CategoryContext';
import { CategoryHeader } from '../CategoryHeader';

interface ArticlesProps {
  data: ArticleData[];
}

export const Articles = ({ data }: ArticlesProps) => {
  const header = useCategoryHeader();

  return (
    <Grid
      container
      direction="column"
      spacing={2}
      sx={{
        '@media-print': {
          display: 'block',
          position: 'relative',
        },
      }}
    >
      {data.map((article, index) => (
        <Grid
          key={index}
          item
          sx={{
            '@media print': {
              position: 'relative',
              breakInside: 'avoid',
            },
          }}
        >
          {header && index === 0 && <CategoryHeader {...header} />}
          <Article article={article} index={index} />
        </Grid>
      ))}
    </Grid>
  );
};
