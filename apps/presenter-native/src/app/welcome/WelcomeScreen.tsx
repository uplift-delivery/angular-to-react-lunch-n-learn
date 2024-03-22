import { FC, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../root-stack-params';

export const WelcomeScreen: FC<NativeStackScreenProps<RootStackParams>> = ({
  navigation,
}) => {
  const goToEvents = useCallback(() => {
    navigation.navigate('EventsList');
  }, [navigation]);
  return (
    <SafeAreaView>
      <Text role={'heading'} variant={'headlineMedium'}>
        Welcome to our lunch n' learn!
      </Text>

      <Button onPress={goToEvents}>
        <Text variant={'labelMedium'}>Events</Text>
      </Button>
    </SafeAreaView>
  );
};
