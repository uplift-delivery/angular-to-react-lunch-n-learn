import { FC, PropsWithChildren } from 'react';
import { ColumnFlexbox } from './ColumnFlexbox';
import { AppMainContent } from './AppMainContent';
import { CssBaseline } from '@mui/material';

export type AppLayoutProps = PropsWithChildren;
export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <ColumnFlexbox flex={1}>
      <CssBaseline />
      <AppMainContent>{children}</AppMainContent>
    </ColumnFlexbox>
  );
};
