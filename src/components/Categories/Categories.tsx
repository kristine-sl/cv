import { Biotech } from '@emotion-icons/material';
import {
  Article,
  Help,
  School,
  WorkOutline,
} from '@emotion-icons/material-outlined';
import { Grid } from '@mui/material';
import React from 'react';
import education from '../../data/education.json';
import experience from '../../data/experience.json';
import research from '../../data/research.json';
import Articles from './Articles';
import Category from './Category';
import Timeline from './Timeline';

function Categories() {
  return (
    <Grid container spacing={2} direction={{ xs: 'column', xl: 'row' }}>
      <Grid item xs={12} xl={6}>
        <Category header="categories.experience" icon={WorkOutline}>
          <Timeline data={experience} />
        </Category>
      </Grid>
      <Grid item xs={12} xl={6}>
        <Category header="categories.education" icon={School}>
          <Timeline data={education} />
        </Category>
      </Grid>
      <Grid item xs={12} xl={6}>
        <Category header="categories.research" icon={Biotech}>
          <Articles data={research} />
        </Category>
      </Grid>
      <Grid item xs={12} xl={6}>
        <Category header="categories.other" icon={Article}></Category>
      </Grid>
      <Grid item xs={12}>
        <Category header="categories.lookingFor" icon={Help}></Category>
      </Grid>
    </Grid>
  );
}

export default Categories;
