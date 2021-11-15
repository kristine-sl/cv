import { EmotionIcon } from '@emotion-icons/emotion-icon';
import { Card, CardContent, Icon, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

interface CategoryProps {
  header: string;
  icon: EmotionIcon;
  children?: ReactNode;
}

export const Category = (props: CategoryProps) => (
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
        sx={{
          mr: 2,
          display: 'flex',
          alignItems: 'center',
          opacity: '0.7',
        }}
      >
        <Icon component={props.icon} />
      </Box>
      <FormattedMessage id={props.header} />
    </Typography>
    <CardContent>{props.children}</CardContent>
  </Card>
);
