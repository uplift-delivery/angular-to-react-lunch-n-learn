import { FC } from 'react';
import { Drawer, DrawerProps, Toolbar } from '@mui/material';

export type AppDrawerProps = DrawerProps;

export const AppDrawer: FC<AppDrawerProps> = ({ children, ...props }) => {
  return (
    <nav>
      <Drawer {...props}>
        <Toolbar />
        {children}
      </Drawer>
    </nav>
  );
};
