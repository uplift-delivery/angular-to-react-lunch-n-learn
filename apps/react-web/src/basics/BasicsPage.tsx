import { FC } from 'react';
import { ColumnFlexbox } from '@uplift-lunch-n-learn/react-ui';
import { Typography } from '@mui/material';

export const BasicsPage: FC = () => {
  // Use State
  // - Simple int with counter input
  // - Save settings in state

  // Use Memo
  // - Show calculated value

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
      <Typography variant={'h4'}>Please Ask Questions</Typography>
    </ColumnFlexbox>
  );
};
