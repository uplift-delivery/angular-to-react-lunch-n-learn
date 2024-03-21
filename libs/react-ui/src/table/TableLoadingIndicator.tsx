import { FC } from 'react';
import { LinearProgress, TableCell, TableRow } from '@mui/material';

export type TableLoadingIndicatorProps = {
  isLoading: boolean;
  columns: number;
};
export const TableLoadingIndicator: FC<TableLoadingIndicatorProps> = ({
  columns,
  isLoading,
}) => {
  if (!isLoading) {
    return null;
  }

  return (
    <TableRow>
      <TableCell padding={'none'} colSpan={columns}>
        <LinearProgress variant={'indeterminate'} />
      </TableCell>
    </TableRow>
  );
};
