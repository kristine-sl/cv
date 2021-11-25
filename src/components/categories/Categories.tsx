import { Biotech } from '@emotion-icons/material';
import {
  Article,
  Help,
  School,
  WorkOutline,
} from '@emotion-icons/material-outlined';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/system';
import { useCallback, useRef } from 'react';
import education from '../../../assets/data/education.json';
import experience from '../../../assets/data/experience.json';
import lookingFor from '../../../assets/data/lookingFor.json';
import other from '../../../assets/data/other.json';
import research from '../../../assets/data/research.json';
import { useChildrenHeights } from '../../hooks/useChildrenHeights';
import Articles from './articles';
import { Category } from './Category';
import List from './list';
import Timeline from './timeline';

export const Categories = () => {
  const theme = useTheme();

  const gridRef = useRef<HTMLDivElement | null>(null);
  const heights = useChildrenHeights(gridRef);
  const getMaxHeight = useCallback(
    () =>
      Math.max(
        heights.slice(0, 2).reduce((a, b) => a + b, 0),
        heights.slice(2).reduce((a, b) => a + b, 0)
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
      <Grid item xs order={{ xs: 1, xl: 1 }}>
        <Category header="categories.experience" icon={WorkOutline}>
          <Timeline data={experience} />
        </Category>
      </Grid>

      <Grid item xs order={{ xs: 2, xl: 3 }}>
        <Category header="categories.education" icon={School}>
          <Timeline data={education} />
        </Category>
      </Grid>

      <Grid item xs order={{ xs: 3, xl: 2 }}>
        <Category header="categories.research" icon={Biotech}>
          <Articles data={research} />
        </Category>
      </Grid>

      <Grid item xs order={{ xs: 4, xl: 4 }}>
        <Category header="categories.other" icon={Article}>
          <Articles data={other} />
        </Category>
      </Grid>

      <Grid item xs order={{ xs: 5, xl: 5 }}>
        <Category header="categories.lookingFor" icon={Help}>
          <List data={lookingFor} />
        </Category>
      </Grid>
    </Grid>
  );
};
