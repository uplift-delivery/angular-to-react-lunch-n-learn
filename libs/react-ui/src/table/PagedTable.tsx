import { FC, PropsWithChildren, useMemo } from 'react';
import {
  Button,
  ButtonGroup,
  IconButton,
  Table,
  TableCell,
  TableFooter,
  TableRow,
} from '@mui/material';
import { PagedResultModel } from '@uplift-lunch-n-learn/models';
import { RowFlexbox } from '../layout/RowFlexbox';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { ColumnFlexbox } from '../layout/ColumnFlexbox';

export type CustomTableProps = PropsWithChildren & {
  columns: number;
  isLoading?: boolean;
  current?: PagedResultModel<unknown>;
  onPreviousPage?: () => void;
  onNextPage?: () => void;
};

export const PagedTable: FC<CustomTableProps> = ({
  children,
  isLoading,
  columns,
  current,
  onNextPage,
  onPreviousPage,
}) => {
  const pageNumber = useMemo(
    () => current?.pageNumber ?? 0,
    [current?.pageNumber]
  );
  return (
    <Table>
      {children}
      <TableFooter>
        <TableRow>
          <TableCell padding={'none'} colSpan={columns}>
            <RowFlexbox flex={1}>
              <ColumnFlexbox flex={1} />
              <ButtonGroup>
                <IconButton
                  disabled={pageNumber <= 1 || isLoading}
                  aria-label={'previous'}
                  onClick={onPreviousPage}
                >
                  <ChevronLeft />
                </IconButton>
                <Button variant={'text'} disabled>
                  {pageNumber}
                </Button>
                <IconButton
                  disabled={isLoading}
                  onClick={onNextPage}
                  aria-label={'next'}
                >
                  <ChevronRight />
                </IconButton>
              </ButtonGroup>
            </RowFlexbox>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
