import { useGetEventsQuery } from '@uplift-lunch-n-learn/react-store';
import { EventsTable } from './EventsTable';
import { useCallback, useState } from 'react';
import { DEFAULT_PAGE_NUMBER, EventModel } from '@uplift-lunch-n-learn/models';
import { Button, Toolbar, Typography } from '@mui/material';
import { EditEventDialog } from './EditEventDialog';
import { DeleteEventDialog } from './DeleteEventDialog';
import { CreateEventDialog } from './CreateEventDialog';
import AddIcon from '@mui/icons-material/Add';

export const EventsPage = () => {
  const [currentPageNumber, setCurrentPageNumber] =
    useState(DEFAULT_PAGE_NUMBER);
  const [eventBeingEdited, setEventBeingEdited] = useState<EventModel | null>(
    null
  );
  const [eventBeingDeleted, setEventBeingDeleted] = useState<EventModel | null>(
    null
  );
  const [isCreating, setIsCreating] = useState(false);

  const nextPage = useCallback(
    () => setCurrentPageNumber(currentPageNumber + 1),
    [currentPageNumber, setCurrentPageNumber]
  );
  const previousPage = useCallback(
    () => setCurrentPageNumber(currentPageNumber - 1),
    [currentPageNumber, setCurrentPageNumber]
  );
  const handleEditEvent = useCallback(
    (event: EventModel) => setEventBeingEdited(event),
    [setEventBeingEdited]
  );
  const handleDeleteEvent = useCallback(
    (event: EventModel) => setEventBeingDeleted(event),
    [setEventBeingDeleted]
  );

  const { isError, isLoading, data } = useGetEventsQuery({
    pageNumber: currentPageNumber,
  });

  return (
    <>
      <Typography variant={'h3'}>Upcoming Events</Typography>

      <Toolbar>
        <Button onClick={() => setIsCreating(true)} startIcon={<AddIcon />}>
          Create Event
        </Button>
      </Toolbar>

      <EventsTable
        isLoading={isLoading}
        isError={isError}
        page={data}
        onNextPage={nextPage}
        onPreviousPage={previousPage}
        onEditEvent={handleEditEvent}
        onDeleteEvent={handleDeleteEvent}
      />

      {eventBeingDeleted && (
        <DeleteEventDialog
          event={eventBeingDeleted}
          onClose={() => setEventBeingDeleted(null)}
        />
      )}
      {eventBeingEdited && (
        <EditEventDialog
          event={eventBeingEdited}
          onClose={() => setEventBeingEdited(null)}
        />
      )}
      {isCreating && (
        <CreateEventDialog
          open={isCreating}
          onClose={() => setIsCreating(false)}
        />
      )}
    </>
  );
};
