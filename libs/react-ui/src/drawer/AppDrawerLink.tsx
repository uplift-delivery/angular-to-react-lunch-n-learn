import { FC, PropsWithChildren } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@mui/material';

export type AppDrawerLinkProps = PropsWithChildren & {
  to: string;
};

export const AppDrawerLink: FC<AppDrawerLinkProps> = ({ children, to }) => {
  return (
    <Button component={RouterLink} to={to}>
      {children}
    </Button>
  );
};
