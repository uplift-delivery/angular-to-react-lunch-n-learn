import { FC, PropsWithChildren } from 'react';
import { ColumnFlexbox } from './ColumnFlexbox';
import { Toolbar } from '@mui/material';

export type AppMainContentProps = PropsWithChildren;
export const AppMainContent: FC<AppMainContentProps> = ({ children }) => {
  return (
    <ColumnFlexbox component={'main'} p={'1.5em'}>
      <Toolbar />
      {children}
    </ColumnFlexbox>
  );
};
