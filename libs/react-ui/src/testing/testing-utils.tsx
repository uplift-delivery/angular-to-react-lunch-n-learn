import { render as testingRender, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

export function render(ui: ReactElement) {
  return testingRender(
    <ThemeProvider theme={createTheme()}>{ui}</ThemeProvider>
  );
}

export { userEvent, screen };
