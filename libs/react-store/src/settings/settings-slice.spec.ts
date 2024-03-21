import { test, expect } from 'vitest';
import { reduceActions } from '../../testing';
import { SettingsActions, settingsReducer } from './settings-slice';
import { ModelFactory } from '@uplift-lunch-n-learn/models/testing';

test('should save settings to state when saved', () => {
  const expected = ModelFactory.settings();
  const state = reduceActions(
    settingsReducer,
    SettingsActions.saveSettings(expected)
  );
  expect(state).toEqual({
    settings: expected,
  });
});
