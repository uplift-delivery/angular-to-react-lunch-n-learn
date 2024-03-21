import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, ButtonProps } from '@mui/material';

export type LinkButtonProps = Omit<ButtonProps<'a'>, 'component'> & {
  to: string;
};
export const LinkButton: FC<LinkButtonProps> = ({ to, ...props }) => {
  return <Button component={RouterLink} to={to} {...props} />;
};
