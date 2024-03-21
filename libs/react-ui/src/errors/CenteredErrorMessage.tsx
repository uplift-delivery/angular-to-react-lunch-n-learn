import { ErrorMessage, ErrorMessageProps } from './ErrorMessage';
import { FC, ReactElement } from 'react';
import { ColumnFlexbox } from '../layout/ColumnFlexbox';

export type CenteredErrorMessageProps = ErrorMessageProps & {
  icon?: ReactElement;
};

export const CenteredErrorMessage: FC<CenteredErrorMessageProps> = ({
  icon,
  ...props
}) => {
  return (
    <ColumnFlexbox flex={1} alignItems={'center'}>
      {icon && icon}
      <ErrorMessage {...props} />
    </ColumnFlexbox>
  );
};
