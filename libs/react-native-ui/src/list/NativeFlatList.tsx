import { FlatList, FlatListProps } from 'react-native';

export type NativeFlatListProps<T> = FlatListProps<T>;

export function NativeFlatList<T>(props: NativeFlatListProps<T>) {
  return <FlatList {...props} />;
}
