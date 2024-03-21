import { MD3TypescaleKey, Text, useTheme } from 'react-native-paper';
import { FC, PropsWithChildren } from 'react';

export type NativeErrorMessageProps = PropsWithChildren & {
  variant?: keyof typeof MD3TypescaleKey;
};

export const NativeErrorMessage: FC<NativeErrorMessageProps> = (props) => {
  const theme = useTheme();
  return (
    <Text
      variant={props.variant ?? 'bodyMedium'}
      style={{ color: theme.colors.error }}
    >
      {props.children}
    </Text>
  );
};
