import { FC } from 'react';
import { useGetEventByIdQuery } from '@uplift-lunch-n-learn/react-store';
import { useParams } from 'react-router-dom';
import {
  CenteredLoadingIndicator,
  ColumnFlexbox,
  RowFlexbox,
  CenteredErrorMessage,
} from '@uplift-lunch-n-learn/react-ui';
import { Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

export const EventDetailsPage: FC = () => {
  const { eventId } = useParams();
  const {
    isLoading,
    isError,
    data: event,
  } = useGetEventByIdQuery(eventId, {
    skip: !eventId,
  });

  return (
    <ColumnFlexbox>
      {isLoading && <CenteredLoadingIndicator text={'Loading event...'} />}
      {isError && (
        <CenteredErrorMessage icon={<ErrorIcon fontSize={'large'} />}>
          Failed to load event
        </CenteredErrorMessage>
      )}
      {event && (
        <ColumnFlexbox gap={'1em'}>
          <RowFlexbox>
            <Typography>Name: </Typography>
            <Typography>{event.name}</Typography>
          </RowFlexbox>

          <RowFlexbox>
            <Typography>Location: </Typography>
            <Typography>{event.location}</Typography>
          </RowFlexbox>

          <RowFlexbox>
            <Typography>Date: </Typography>
            <Typography>{event.date}</Typography>
          </RowFlexbox>
        </ColumnFlexbox>
      )}
    </ColumnFlexbox>
  );
};
