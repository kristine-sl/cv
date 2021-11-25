import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import type { NextPage } from 'next';
import { Categories } from '../components/categories/Categories';
import { Profile } from '../components/profile/Profile';

const Home: NextPage = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        '@media print': {
          display: 'block',
          '.MuiGrid-root': { display: 'block' },
          '.MuiGrid-item': {
            maxWidth: '100%',
            flexBasis: 'auto',
            pr: 0,
          },
        },
      }}
    >
      <Grid item xs={12} md={5} lg={4} xl={3}>
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
};

export default Home;
