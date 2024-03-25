import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  test('when rendered then shows toolbar', async () => {
    await render(AppComponent);

    expect(
      screen.getByRole('button', { name: /open\snavigation\smenu/i })
    ).toBeInTheDocument();
  });
});
