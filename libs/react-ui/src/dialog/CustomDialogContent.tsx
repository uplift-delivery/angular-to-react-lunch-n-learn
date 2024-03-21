import { FC } from 'react';
import { DialogContent, DialogContentProps } from '@mui/material';

export type CustomDialogContentProps = DialogContentProps;
export const CustomDialogContent: FC<CustomDialogContentProps> = (props) => {
  return <DialogContent {...props} />;
};
