import { FC } from 'react';
import { ColumnFlexbox } from '@uplift-lunch-n-learn/react-ui';
import { Typography } from '@mui/material';

export const BasicsPage: FC = () => {
  // Use State
  // - Simple boolean with Switch
  // - Save settings in state

  // Use Memo
  // - Show object being created each time with a useEffect

  // Use Effect
  // - Load settings using effect
  // - Load events using effect & settings

  // Use Callback
  // - Refetching data from server on button click

  // Use Reducer
  // - Consolidate fetch properties using a reducer

  // Use Context
  // - Consolidate reducer state into a context

  return (
    <ColumnFlexbox>
      <Typography variant={'h3'}>React Basics</Typography>
    </ColumnFlexbox>
  );
};
