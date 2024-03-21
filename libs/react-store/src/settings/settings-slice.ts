import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SettingsModel } from '@uplift-lunch-n-learn/models';

type SettingsState = {
  settings: null | SettingsModel;
};
export const settingsSlice = createSlice({
  name: 'settings',
  reducers: {
    saveSettings: (state, action: PayloadAction<SettingsModel>) => ({
      ...state,
      settings: action.payload,
    }),
  },
  initialState: { settings: null } as SettingsState,
});

export const SETTINGS_INITIAL_STATE = settingsSlice.getInitialState();
export const settingsReducer = settingsSlice.reducer;
export const SettingsActions = settingsSlice.actions;
