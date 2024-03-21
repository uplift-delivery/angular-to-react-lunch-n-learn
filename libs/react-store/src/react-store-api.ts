import { createApi } from '@reduxjs/toolkit/query/react';
import { settingsBasedQuery } from './settings-based-query';
import { ApiTagTypes } from './api-tags';

export const reactStoreApi = createApi({
  baseQuery: settingsBasedQuery,
  tagTypes: ApiTagTypes,
  endpoints: () => ({}),
});
