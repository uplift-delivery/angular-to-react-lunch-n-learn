import { FC, PropsWithChildren } from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export type AppMenubarProps = PropsWithChildren & {
  onMenuClick?: () => void;
};

export const AppMenubar: FC<AppMenubarProps> = ({ onMenuClick, children }) => {
  return (
    <AppBar>
      <Toolbar>
        {onMenuClick && (
          <IconButton onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
        )}
        {children}
      </Toolbar>
    </AppBar>
  );
};
