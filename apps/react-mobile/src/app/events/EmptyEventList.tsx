import { FC } from 'react';
import { Text } from 'react-native-paper';

export const EmptyEventList: FC = () => {
  return <Text variant={'headlineMedium'}>No upcoming events available</Text>;
};
