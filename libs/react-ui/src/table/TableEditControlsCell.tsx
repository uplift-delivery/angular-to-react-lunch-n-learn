import { FC } from 'react';
import { IconButton, TableCell } from '@mui/material';
import { RowFlexbox } from '../layout/RowFlexbox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export type TableEditControlsCellProps = {
  onEdit?: () => void;
  onDelete?: () => void;
};

export const TableEditControlsCell: FC<TableEditControlsCellProps> = ({
  onEdit,
  onDelete,
}) => {
  return (
    <TableCell>
      <RowFlexbox flex={1}>
        <RowFlexbox flex={1} />
        {onEdit && (
          <IconButton onClick={onEdit} aria-label={'edit'}>
            <EditIcon />
          </IconButton>
        )}

        {onDelete && (
          <IconButton onClick={onDelete} color={'error'} aria-label={'delete'}>
            <DeleteIcon />
          </IconButton>
        )}
      </RowFlexbox>
    </TableCell>
  );
};
