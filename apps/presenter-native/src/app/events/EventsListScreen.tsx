import { FC, useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  selectAllEvents,
  useGetEventsQuery,
  useReactStoreSelector,
} from '@uplift-lunch-n-learn/react-store';
import { EventsList } from './EventsList';
import {
  NativeErrorMessage,
  NativeLoadingIndicator,
} from '@uplift-lunch-n-learn/react-native-ui';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../root-stack-params';
import { EventModel } from '@uplift-lunch-n-learn/models';

export const EventsListScreen: FC<NativeStackScreenProps<RootStackParams>> = ({
  navigation,
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const events = useReactStoreSelector((s) => selectAllEvents(s));
  const { isLoading, isError } = useGetEventsQuery({
    pageNumber,
    pageSize: 10,
  });

  const handleLoadMore = useCallback(() => {
    setPageNumber(pageNumber + 1);
  }, [setPageNumber, pageNumber]);

  const handleSelectedEvent = useCallback(
    (event: EventModel) => {
      navigation.navigate('EventDetails', { id: event.id });
    },
    [navigation]
  );

  return (
    <SafeAreaView>
      <EventsList
        items={events}
        onLoadMore={handleLoadMore}
        onSelect={handleSelectedEvent}
      />
      {isLoading && <NativeLoadingIndicator />}
      {isError && (
        <NativeErrorMessage>Failed to load events</NativeErrorMessage>
      )}
    </SafeAreaView>
  );
};
