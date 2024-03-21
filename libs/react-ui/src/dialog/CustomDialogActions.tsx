import { FC } from 'react';
import { DialogActions, DialogActionsProps } from '@mui/material';

export type CustomDialogActionsProps = DialogActionsProps;
export const CustomDialogActions: FC<CustomDialogActionsProps> = (props) => {
  return <DialogActions {...props} />;
};
