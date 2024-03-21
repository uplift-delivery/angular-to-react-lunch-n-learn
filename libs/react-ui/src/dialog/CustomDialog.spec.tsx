import { render, screen } from '../testing/testing-utils';
import { CustomDialog } from './CustomDialog';

describe('CustomDialog', () => {
  it('should show dialog when opened', () => {
    render(<CustomDialog open={true} />);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should hide dialog when closed', () => {
    render(<CustomDialog open={false} />);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
