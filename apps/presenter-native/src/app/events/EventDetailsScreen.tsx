import { FC, useCallback } from 'react';
import { RootStackParams } from '../root-stack-params';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  selectEventById,
  useReactStoreSelector,
  useUpdateEventMutation,
} from '@uplift-lunch-n-learn/react-store';
import { Button, Card, Text } from 'react-native-paper';
import { EventFields, useEventForm } from './event-form';
import { NativeTextInput } from '@uplift-lunch-n-learn/react-native-ui';

export const EventDetailsScreen: FC<
  NativeStackScreenProps<RootStackParams, 'EventDetails'>
> = ({ route, navigation }) => {
  const event = useReactStoreSelector((s) =>
    selectEventById(s, route.params.id)
  );
  const [updateEventMutation] = useUpdateEventMutation();
  const { handleSubmit, control } = useEventForm(event);
  const submitHandler = useCallback(
    async (fields: EventFields) => {
      try {
        await updateEventMutation({ ...event, ...fields }).unwrap();
        navigation.pop();
      } catch (e) {
        console.log('Failed to save event', e);
      }
    },
    [updateEventMutation, event, navigation]
  );
  return (
    <SafeAreaView>
      <Card>
        <Card.Title title={event?.name ?? 'Unknown'} />
        <Card.Content>
          <NativeTextInput
            name={'location'}
            label={'Location'}
            control={control}
          />
        </Card.Content>
        <Card.Actions>
          <Button onPress={handleSubmit(submitHandler)} mode={'contained'}>
            <Text variant={'bodyMedium'}>Save</Text>
          </Button>
        </Card.Actions>
      </Card>
    </SafeAreaView>
  );
};
