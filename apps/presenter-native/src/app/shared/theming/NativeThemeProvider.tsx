import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD3LightTheme,
  MD3DarkTheme,
  adaptNavigationTheme,
  PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';
import { FC, PropsWithChildren, useMemo } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const { LightTheme: AdaptedLightTheme, DarkTheme: AdaptedDarkTheme } =
  adaptNavigationTheme({
    reactNavigationDark: NavigationDarkTheme,
    reactNavigationLight: NavigationDefaultTheme,
  });

const LightTheme = merge(MD3LightTheme, AdaptedLightTheme);
const DarkTheme = merge(MD3DarkTheme, AdaptedDarkTheme);

export type NativeThemeProviderProps = PropsWithChildren & {
  mode: 'dark' | 'light';
};
export const NativeThemeProvider: FC<NativeThemeProviderProps> = ({
  mode,
  children,
}) => {
  const theme = useMemo(
    () => (mode === 'dark' ? DarkTheme : LightTheme),
    [mode]
  );
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer theme={theme}>{children}</NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};
