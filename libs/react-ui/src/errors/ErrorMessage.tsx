import { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export type ErrorMessageProps = TypographyProps;
export const ErrorMessage: FC<ErrorMessageProps> = (props) => {
  return <Typography variant={'body1'} color={'error'} {...props} />;
};
