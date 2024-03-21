import { FC } from 'react';
import { CustomDialogActions } from './CustomDialogActions';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

export type SaveDialogActionsProps = {
  onSave?: () => void;
  onCancel?: () => void;
};

export const SaveDialogActions: FC<SaveDialogActionsProps> = ({
  onSave,
  onCancel,
}) => {
  return (
    <CustomDialogActions>
      <Button onClick={onCancel} startIcon={<CancelIcon />}>
        Cancel
      </Button>
      <Button
        type={'submit'}
        color={'primary'}
        variant={'contained'}
        onClick={onSave}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
    </CustomDialogActions>
  );
};
