import { test, vi } from 'vitest';
import { render, screen, userEvent } from '../testing/testing-utils';
import { FormDialog } from './FormDialog';
import { FormDialogContent } from './FormDialogContent';
import { TextField } from '@mui/material';

test('when rendered then shows dialog as a form', async () => {
  const onSubmit = vi.fn();

  render(
    <FormDialog open={true} onSubmit={onSubmit}>
      <FormDialogContent>
        <TextField label={'name'} />
      </FormDialogContent>
    </FormDialog>
  );

  await userEvent.type(
    screen.getByRole('textbox', { name: /name/i }),
    '[Enter]'
  );

  expect(onSubmit).toHaveBeenCalled();
});
