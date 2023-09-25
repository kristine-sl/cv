import { Button } from '@mui/material';
import { FormattedMessage } from 'react-intl';

interface CustomButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  messageId: string;
  id?: string;
}

export const CustomButton = ({ onClick, messageId, id }: CustomButtonProps) => (
  <Button
    id={id}
    variant="contained"
    color="secondary"
    disableElevation
    sx={{ mr: { md: 1 } }}
    onClick={onClick}
  >
    <FormattedMessage id={messageId} />
  </Button>
);

