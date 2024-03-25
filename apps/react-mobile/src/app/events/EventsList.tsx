import { FC, useCallback } from 'react';
import { EventModel } from '@uplift-lunch-n-learn/models';
import { NativeFlatList } from '@uplift-lunch-n-learn/react-native-ui';
import { List } from 'react-native-paper';

export type EventsListProps = {
  items: EventModel[];
  onLoadMore?: () => void;
  onSelect?: (event: EventModel) => void;
};

export const EventsList: FC<EventsListProps> = ({
  items,
  onLoadMore,
  onSelect,
}) => {
  return (
    <NativeFlatList
      data={items}
      onEndReached={onLoadMore}
      renderItem={(e) => (
        <EventListItem key={e.item.id} event={e.item} onPress={onSelect} />
      )}
    />
  );
};

type EventListItemProps = {
  event: EventModel;
  onPress?: (event: EventModel) => void;
};
const EventListItem: FC<EventListItemProps> = ({ event, onPress }) => {
  const handlePress = useCallback(() => {
    onPress && onPress(event);
  }, [onPress, event]);
  return <List.Item title={event.name} onPress={handlePress} />;
};
