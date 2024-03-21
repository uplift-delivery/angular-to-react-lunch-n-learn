import { Action, Reducer } from '@reduxjs/toolkit';

export function reduceActions<TState>(
  reducer: Reducer<TState>,
  ...actions: Action[]
): TState {
  const initialState = reducer(undefined, { type: 'init' });
  return actions.reduce((s, a) => reducer(s, a), initialState);
}
