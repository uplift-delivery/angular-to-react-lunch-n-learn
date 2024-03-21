import { FC, ReactElement } from 'react';
import { TableCell, TableRow } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { CenteredErrorMessage } from '../errors/CenteredErrorMessage';

export type TableErrorIndicatorProps = {
  hasError: boolean;
  message: string | ReactElement;
  columns: number;
};

export const TableErrorIndicator: FC<TableErrorIndicatorProps> = ({
  hasError,
  message,
  columns,
}) => {
  if (!hasError) {
    return null;
  }

  return (
    <TableRow>
      <TableCell colSpan={columns}>
        <CenteredErrorMessage icon={<ErrorIcon color={'error'} />}>
          {message}
        </CenteredErrorMessage>
      </TableCell>
    </TableRow>
  );
};
