import { FC } from 'react';
import { DialogTitle, DialogTitleProps } from '@mui/material';

export type CustomDialogTitleProps = DialogTitleProps;

export const CustomDialogTitle: FC<CustomDialogTitleProps> = (props) => {
  return <DialogTitle {...props} />;
};
