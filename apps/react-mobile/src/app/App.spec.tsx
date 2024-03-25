import React from 'react';
import { render } from '@testing-library/react-native';

import { App } from './App';

test('renders correctly', () => {
  const { getByRole } = render(<App />);

  expect(getByRole('heading')).toHaveTextContent('Welcome');
});
