import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Categories, CategoryData } from './categories';
import { Profile, ProfileData, ProfilePictureProps } from './profile';

export type MainProps = {
  profile: ProfileData;
  categories: CategoryData[];
} & Pick<ProfilePictureProps, 'image'>;

export const Main = ({ image, profile, categories }: MainProps) => {
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
          <Profile image={image} data={profile} />
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
          <Categories data={categories} />
        </Box>
      </Grid>
    </Grid>
  );
};
