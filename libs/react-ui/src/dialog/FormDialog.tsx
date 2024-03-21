import { CustomDialog, CustomDialogProps } from './CustomDialog';
import { FC, FormEventHandler } from 'react';

export type FormDialogProps = Omit<CustomDialogProps, 'PaperProps'> & {
  onSubmit: FormEventHandler;
};
export const FormDialog: FC<FormDialogProps> = ({
  onSubmit,
  onClose,
  ...props
}) => {
  return (
    <CustomDialog
      {...props}
      PaperProps={{
        component: 'form',
        onSubmit: onSubmit,
      }}
    />
  );
};
