import { FC } from 'react';
import { Drawer, DrawerProps, Toolbar } from '@mui/material';
import { ColumnFlexbox } from '../layout/ColumnFlexbox';

export type AppDrawerProps = DrawerProps;

export const AppDrawer: FC<AppDrawerProps> = ({ children, ...props }) => {
  return (
    <nav>
      <Drawer {...props}>
        <ColumnFlexbox minWidth={'10em'}>
          <Toolbar />
          {children}
        </ColumnFlexbox>
      </Drawer>
    </nav>
  );
};
