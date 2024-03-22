import {
  PagedTable,
  TableErrorIndicator,
  TableLoadingIndicator,
} from '@uplift-lunch-n-learn/react-ui';
import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { EventModel, PagedResultModel } from '@uplift-lunch-n-learn/models';
import { FC, useMemo } from 'react';
import { EventTableRow } from './EventTableRow';

const TABLE_COLUMNS = 4;
export type EventsTableProps = {
  isLoading: boolean;
  isError: boolean;
  page?: PagedResultModel<EventModel>;
  onNextPage?: () => void;
  onPreviousPage?: () => void;
  onEditEvent?: (event: EventModel) => void;
  onDeleteEvent?: (event: EventModel) => void;
};
export const EventsTable: FC<EventsTableProps> = ({
  isError,
  page,
  onPreviousPage,
  onNextPage,
  isLoading,
  onDeleteEvent,
  onEditEvent,
}) => {
  const items = useMemo(() => page?.items ?? [], [page?.items]);
  const tableRows = useMemo(
    () =>
      items.map((i) => (
        <EventTableRow
          key={i.id}
          event={i}
          onDelete={onDeleteEvent}
          onEdit={onEditEvent}
        />
      )),
    [items, onEditEvent, onDeleteEvent]
  );
  return (
    <PagedTable
      isLoading={isLoading}
      columns={TABLE_COLUMNS}
      current={page}
      onNextPage={onNextPage}
      onPreviousPage={onPreviousPage}
    >
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Location</TableCell>
          <TableCell>Date</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableLoadingIndicator isLoading={isLoading} columns={TABLE_COLUMNS} />
        <TableErrorIndicator
          hasError={isError}
          message={'Failed to load events'}
          columns={TABLE_COLUMNS}
        />
        {tableRows}
      </TableBody>
    </PagedTable>
  );
};
