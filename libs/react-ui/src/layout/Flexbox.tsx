import { FC } from 'react';
import { Box, BoxProps } from '@mui/material';

export type FlexboxProps = Omit<BoxProps, 'display'>;

export const Flexbox: FC<FlexboxProps> = (props) => {
  return <Box display={'flex'} {...props} />;
};
