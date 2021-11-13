import { Button } from '@mui/material';
import { FormattedMessage } from 'react-intl';

export const Contact = () => {
  return (
    <Button
      href="mailto:kristine.sundt.lorentzen@gmail.com"
      variant="contained"
      color="secondary"
      disableElevation
      sx={{ mr: { md: 1 } }}
    >
      <FormattedMessage id="header.contact" />
    </Button>
  );
};
