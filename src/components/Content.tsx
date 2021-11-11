import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Categories from './Categories';
import Profile from './Profile';

function Content() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={5} lg={4}>
        <Box sx={{ py: 2, pl: 2, pr: { xs: 2, md: 0 } }}>
          <Profile />
        </Box>
      </Grid>
      <Grid
        item
        xs
        sx={{
          height: { md: 'calc(100vh - 48px)' },
          overflow: { md: 'scroll' },
        }}
      >
        <Box sx={{ py: 2, pr: 2, pl: { xs: 2, md: 0 } }}>
          <Categories />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Content;
