import {
  DEFAULT_PAGE_NUMBER,
  DEFAULT_PAGE_SIZE,
  EventModel,
  PagedQuery,
  PagedResultModel,
  SettingsModel,
} from '../src';
import { faker } from '@faker-js/faker';

function event(model?: Partial<EventModel>): EventModel {
  return {
    name: faker.music.songName(),
    date: faker.date.future().toISOString(),
    location: faker.location.streetAddress(),
    id: faker.string.uuid(),
    ...model,
  };
}

function settings(model?: Partial<SettingsModel>): SettingsModel {
  return {
    baseUrl: faker.internet.url(),
    ...model,
  };
}

function many<T>(creator: () => T, count: number): T[] {
  return Array.from({ length: count }).map(creator);
}

function pagedResultFromCount<T>(
  creator: () => T,
  count: number,
  paging?: Partial<PagedQuery>
): PagedResultModel<T> {
  const items = many(creator, count);
  return pagedResultFromItems(items, paging);
}

function pagedResultFromItems<T>(
  items: T[] = [],
  paging?: Partial<PagedQuery>
): PagedResultModel<T> {
  return {
    pageNumber: paging?.pageNumber ?? DEFAULT_PAGE_NUMBER,
    items,
    pageSize: paging?.pageSize ?? DEFAULT_PAGE_SIZE,
  };
}

export const ModelFactory = {
  event,
  settings,
  many,
  pagedResultFromCount,
  pagedResultFromItems,
};
