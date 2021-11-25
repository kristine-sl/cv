import { Box, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { useCategoryHeader } from '../CategoryContext';
import { CategoryHeader } from '../CategoryHeader';

interface ListProps {
  data: string[];
}

export const List = ({ data }: ListProps) => {
  const header = useCategoryHeader();

  return (
    <Box
      component="ul"
      sx={{
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        pl: 0,
        '@media print': {
          breakInside: 'avoid',
        },
      }}
    >
      {header && <CategoryHeader {...header} />}
      {data.map((item, index) => (
        <Box sx={{ pl: 3.5 }} key={index}>
          <Box
            component="li"
            sx={{
              '&::marker': {
                color: 'secondary.main',
                fontSize: '0.8rem',
              },
            }}
          >
            <Typography variant="body2">
              <FormattedMessage id={item} />
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
