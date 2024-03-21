import { FC } from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native-paper';

export type NativeLoadingIndicatorProps = ActivityIndicatorProps;
export const NativeLoadingIndicator: FC<NativeLoadingIndicatorProps> = (
  props
) => {
  return <ActivityIndicator color={'primary'} animating={true} {...props} />;
};
