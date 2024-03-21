import { BaseQueryApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ReactStoreState } from './create-react-store';
import { SettingsModel } from '@uplift-lunch-n-learn/models';
import { SettingsActions } from './settings/settings-slice';

export const settingsBasedQuery: ReturnType<typeof fetchBaseQuery> = async (
  args,
  api,
  options
) => {
  const settings = await readOrRetrieveSettings(api);
  const baseQuery = fetchBaseQuery({
    baseUrl: settings.baseUrl,
  });
  return baseQuery(args, api, options);
};

async function readOrRetrieveSettings(api: BaseQueryApi) {
  const state = api.getState() as ReactStoreState;
  const settings = state?.settings?.settings ?? null;
  if (settings) {
    return settings;
  }

  const newSettings = await fetchSettings();
  api.dispatch(SettingsActions.saveSettings(newSettings));
  return newSettings;
}

async function fetchSettings() {
  const res = await fetch('settings.json');
  return (await res.json()) as SettingsModel;
}
