import { FC } from 'react';
import { Dialog, DialogProps } from '@mui/material';

export type CustomDialogProps = DialogProps;
export const CustomDialog: FC<CustomDialogProps> = (props) => {
  return <Dialog {...props} />;
};
