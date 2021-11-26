import { Button } from '@mui/material';
import { FormattedMessage } from 'react-intl';

interface ContactProps {
  email: string;
}

export const Contact = ({ email }: ContactProps) => (
  <Button
    href={'mailto:' + email}
    variant="contained"
    color="secondary"
    disableElevation
    sx={{ mr: { md: 1 } }}
  >
    <FormattedMessage id="header.contact" />
  </Button>
);
