import { FC } from 'react';
import { CustomDialogActions } from './CustomDialogActions';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';

export type DeleteDialogActionsProps = {
  onDelete?: () => void;
  onCancel?: () => void;
};

export const DeleteDialogActions: FC<DeleteDialogActionsProps> = ({
  onDelete,
  onCancel,
}) => {
  return (
    <CustomDialogActions>
      <Button onClick={onDelete} startIcon={<DeleteIcon />} color={'error'}>
        Delete
      </Button>
      <Button onClick={onCancel} startIcon={<CancelIcon />} color={'info'}>
        Cancel
      </Button>
    </CustomDialogActions>
  );
};
