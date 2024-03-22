import { ComponentType, FC, PropsWithChildren, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, ButtonProps, styled } from '@mui/material';

export type AppDrawerLinkProps = PropsWithChildren & {
  onClick?: () => void;
  to: string;
};

const DrawerButton = styled(Button)({
  justifyContent: 'flex-start',
  paddingLeft: '1em',
}) as ComponentType<ButtonProps & { to: string }>;

export const AppDrawerLink: FC<AppDrawerLinkProps> = ({
  children,
  to,
  onClick,
}) => {
  return (
    <DrawerButton fullWidth component={RouterLink} to={to} onClick={onClick}>
      {children}
    </DrawerButton>
  );
};
