import { FC } from 'react';
import { Flexbox, FlexboxProps } from './Flexbox';

export type ColumnFlexboxProps = Omit<FlexboxProps, 'flexDirection'>;

export const ColumnFlexbox: FC<ColumnFlexboxProps> = (props) => {
  return <Flexbox flexDirection={'column'} {...props} />;
};
