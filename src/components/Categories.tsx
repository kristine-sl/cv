import { EmotionIcon } from '@emotion-icons/emotion-icon';
import { Biotech } from '@emotion-icons/material';
import {
  Article,
  Help,
  School,
  WorkOutline,
} from '@emotion-icons/material-outlined';
import { Box, Card, CardContent, Grid, Icon, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import education from '../data/education.json';
import experience from '../data/experience.json';
import Timeline from './Timeline';

interface CategoryProps {
  header: string;
  icon: EmotionIcon;
  children?: ReactNode;
}

function Category(props: CategoryProps) {
  return (
    <Card>
      <Typography
        variant="h2"
        sx={{
          px: 2,
          py: 1.5,
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{ mr: 2, display: 'flex', alignItems: 'center', opacity: '0.7' }}
        >
          <Icon component={props.icon} />
        </Box>
        <FormattedMessage id={props.header} />
      </Typography>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}

function Categories() {
  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Category header="categories.experience" icon={WorkOutline}>
          <Timeline data={experience} />
        </Category>
      </Grid>
      <Grid item>
        <Category header="categories.education" icon={School}>
          <Timeline data={education} />
        </Category>
      </Grid>
      <Grid item>
        <Category header="categories.research" icon={Biotech}></Category>
      </Grid>
      <Grid item>
        <Category header="categories.other" icon={Article}></Category>
      </Grid>
      <Grid item>
        <Category header="categories.lookingFor" icon={Help}></Category>
      </Grid>
    </Grid>
  );
}

export default Categories;
