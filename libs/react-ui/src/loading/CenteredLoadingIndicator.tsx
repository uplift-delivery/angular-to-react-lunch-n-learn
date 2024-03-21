import { FC } from 'react';
import {
  CircularLoadingIndicator,
  CircularLoadingIndicatorProps,
} from './CircularLoadingIndicator';
import { ColumnFlexbox } from '../layout/ColumnFlexbox';

export type CenteredLoadingIndicatorProps = CircularLoadingIndicatorProps;

export const CenteredLoadingIndicator: FC<CenteredLoadingIndicatorProps> = (
  props
) => {
  return (
    <ColumnFlexbox>
      <CircularLoadingIndicator {...props} />
    </ColumnFlexbox>
  );
};
