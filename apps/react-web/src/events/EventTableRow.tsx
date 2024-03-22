import { FC, useCallback, useMemo } from 'react';
import { TableCell, TableRow } from '@mui/material';
import { EventModel } from '@uplift-lunch-n-learn/models';
import {
  LinkButton,
  TableEditControlsCell,
} from '@uplift-lunch-n-learn/react-ui';
import { AppRouting } from '../app-routing';
import { format, parseISO } from 'date-fns';

export type EventTableRowProps = {
  event: EventModel;
  onEdit?: (event: EventModel) => void;
  onDelete?: (event: EventModel) => void;
};
export const EventTableRow: FC<EventTableRowProps> = ({
  event,
  onEdit,
  onDelete,
}) => {
  const handleEdit = useCallback(
    () => onEdit && onEdit(event),
    [event, onEdit]
  );
  const handleDelete = useCallback(
    () => onDelete && onDelete(event),
    [event, onDelete]
  );
  const formattedDate = useMemo(() => {
    const date =
      typeof event.date === 'string' ? parseISO(event.date) : event.date;
    return format(date, 'MM/dd/yyyy');
  }, [event]);
  return (
    <TableRow>
      <TableCell>
        <LinkButton to={AppRouting.eventDetail.to(event)}>
          {event.name}
        </LinkButton>
      </TableCell>
      <TableCell>{event.location}</TableCell>
      <TableCell>{formattedDate}</TableCell>
      <TableEditControlsCell onEdit={handleEdit} onDelete={handleDelete} />
    </TableRow>
  );
};
