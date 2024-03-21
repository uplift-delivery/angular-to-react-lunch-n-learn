import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { reactStoreApi } from './react-store-api';
import { eventsReducer } from './events/events-slice';
import { settingsReducer } from './settings/settings-slice';

export function createReactStore() {
  return configureStore({
    reducer: {
      [reactStoreApi.reducerPath]: reactStoreApi.reducer,
      events: eventsReducer,
      settings: settingsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(reactStoreApi.middleware),
  });
}

type CreateReactStoreResult = ReturnType<typeof createReactStore>;
export type ReactStoreState = ReturnType<CreateReactStoreResult['getState']>;
export const useReactStoreDispatch = useDispatch;
export const useReactStoreSelector: TypedUseSelectorHook<ReactStoreState> =
  useSelector;
