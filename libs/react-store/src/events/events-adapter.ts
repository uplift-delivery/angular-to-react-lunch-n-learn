import { createEntityAdapter } from '@reduxjs/toolkit';
import { EventModel } from '@uplift-lunch-n-learn/models';

export const eventsAdapter = createEntityAdapter<EventModel, string>({
  selectId: (event) => event.id,
  sortComparer: (one, two) => one.name.localeCompare(two.name),
});
