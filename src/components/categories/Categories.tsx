import { Grid } from '@mui/material';
import { useTheme } from '@mui/system';
import { useCallback, useRef } from 'react';
import { useChildrenHeights } from '../../hooks/useChildrenHeights';
import { Articles } from './articles';
import { Category } from './Category';
import { CategoryData } from './categoryData';
import { List } from './list';
import { Timeline } from './timeline';
import { Gallery } from './gallery';

interface CategoriesProps {
  data: CategoryData[];
}

export const Categories = ({ data }: CategoriesProps) => {
  const theme = useTheme();
  const gridRef = useRef<HTMLDivElement | null>(null);
  const heights = useChildrenHeights(gridRef);
  const getMaxHeight = useCallback(
    () =>
      Math.max(
        heights.slice(0, data.length / 2).reduce((a, b) => a + b, 0),
        heights.slice(data.length / 2).reduce((a, b) => a + b, 0)
      ),
    [heights]
  );

  return (
    <Grid
      ref={gridRef}
      container
      spacing={2}
      direction="column"
      sx={{
        maxHeight: { xl: getMaxHeight() },
        width: { xl: `calc(50% + ${theme.spacing(1)})` },
      }}
    >
      {data.map((category, index) => (
        <Grid item xs order={category.order} key={index}>
          <Category header={category.header} icon={category.icon}>
            {category.type === 'timeline' && <Timeline data={category.data} />}
            {category.type === 'articles' && <Articles data={category.data} />}
            {category.type === 'list' && <List data={category.data} />}
            {category.type === 'gallery' && <Gallery data={category.data} />}
          </Category>
        </Grid>
      ))}
    </Grid>
  );
};
