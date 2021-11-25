import { EmotionIcon } from '@emotion-icons/emotion-icon';
import { Icon, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FormattedMessage } from 'react-intl';

export interface CategoryHeaderProps {
  header: string;
  icon: EmotionIcon;
}

export const CategoryHeader = ({ header, icon }: CategoryHeaderProps) => {
  return (
    <Typography
      variant="h2"
      sx={{
        px: 2,
        py: 1.5,
        mx: -2,
        mt: -2,
        mb: 2,
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        display: 'flex',
        alignItems: 'center',
        '@media print': {
          WebkitPrintColorAdjust: 'exact',
          breakInside: 'avoid',
          breakBefore: 'auto',
          breakAfter: 'avoid',
          position: 'relative',
        },
      }}
    >
      <Box
        sx={{
          mr: 2,
          display: 'flex',
          alignItems: 'center',
          opacity: '0.7',
        }}
      >
        <Icon component={icon} />
      </Box>
      <FormattedMessage id={header} />
    </Typography>
  );
};
