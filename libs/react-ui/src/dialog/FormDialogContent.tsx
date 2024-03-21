import { FC } from 'react';
import {
  CustomDialogContent,
  CustomDialogContentProps,
} from './CustomDialogContent';
import { ColumnFlexbox } from '../layout/ColumnFlexbox';

export type FormDialogContentProps = CustomDialogContentProps;
export const FormDialogContent: FC<FormDialogContentProps> = ({
  children,
  ...props
}) => {
  return (
    <CustomDialogContent {...props}>
      <ColumnFlexbox p={'1em'} flex={1} gap={'1em'}>
        {children}
      </ColumnFlexbox>
    </CustomDialogContent>
  );
};
