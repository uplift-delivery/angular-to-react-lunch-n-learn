import { FC } from 'react';
import { Flexbox, FlexboxProps } from './Flexbox';

export type RowFlexboxProps = Omit<FlexboxProps, 'flexDirection'>;

export const RowFlexbox: FC<RowFlexboxProps> = (props) => {
  return <Flexbox flexDirection={'row'} {...props} />;
};
