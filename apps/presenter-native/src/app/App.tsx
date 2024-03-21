import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import {
  createReactStore,
  SettingsActions,
} from '@uplift-lunch-n-learn/react-store';
import { NativeThemeProvider } from './shared/theming/NativeThemeProvider';
import { WelcomeScreen } from './welcome/WelcomeScreen';
import { EventsListScreen } from './events/EventsListScreen';
import { RootStackParams } from './root-stack-params';
import { EventDetailsScreen } from './events/EventDetailsScreen';

const Stack = createNativeStackNavigator<RootStackParams>();

const store = createReactStore();
store.dispatch(
  SettingsActions.saveSettings({
    baseUrl: 'http://localhost:5001',
  })
);
export const App = () => {
  return (
    <Provider store={store}>
      <NativeThemeProvider mode={'light'}>
        <Stack.Navigator initialRouteName={'Welcome'}>
          <Stack.Screen name={'Welcome'} component={WelcomeScreen} />
          <Stack.Screen
            name={'EventsList'}
            component={EventsListScreen}
            options={{ title: 'Events' }}
          />
          <Stack.Screen name={'EventDetails'} component={EventDetailsScreen} />
        </Stack.Navigator>
      </NativeThemeProvider>
    </Provider>
  );
};
