import { FC, PropsWithChildren } from 'react';
import { ColumnFlexbox } from './ColumnFlexbox';

export type AppMainContentProps = PropsWithChildren;
export const AppMainContent: FC<AppMainContentProps> = ({ children }) => {
  return (
    <ColumnFlexbox component={'main'} mt={'3em'} p={'1em'}>
      {children}
    </ColumnFlexbox>
  );
};
