import '@testing-library/jest-native/extend-expect';

import { Animated } from 'react-native';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Animated.timing = () => ({
  start: () => jest.fn(),
});
