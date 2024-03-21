import { reactStoreApi } from '../react-store-api';
import {
  EventModel,
  PagedQuery,
  PagedResultModel,
  pagedQueryToParams,
} from '@uplift-lunch-n-learn/models';
import { EventTag } from '../api-tags';

export const eventsApi = reactStoreApi.injectEndpoints({
  endpoints: (build) => ({
    getEvents: build.query<
      PagedResultModel<EventModel>,
      Partial<PagedQuery> | void
    >({
      providesTags: (result) =>
        result
          ? [
              ...result.items.map((i) => ({ type: EventTag, id: i.id })),
              EventTag,
            ]
          : [EventTag],
      query: (args) => ({
        url: `events`,
        params: pagedQueryToParams(args),
      }),
    }),
    getEventById: build.query<EventModel, string | undefined>({
      providesTags: (result, err, arg) =>
        result ? [{ type: EventTag, id: result.id }] : [],
      query: (id) => ({
        url: `events/${id}`,
      }),
    }),
    createEvent: build.mutation<EventModel, Partial<EventModel>>({
      invalidatesTags: [EventTag],
      query: (args) => ({
        url: 'events',
        body: args,
        method: 'POST',
      }),
    }),
    updateEvent: build.mutation<
      void,
      Partial<EventModel> & Pick<EventModel, 'id'>
    >({
      invalidatesTags: (result, error, arg) =>
        error ? [] : [{ type: EventTag, id: arg.id }, EventTag],
      query: (args) => ({
        url: `events/${args.id}`,
        body: args,
        method: 'PUT',
      }),
    }),
    deleteEvent: build.mutation<void, string>({
      invalidatesTags: [EventTag],
      query: (id) => ({
        url: `events/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetEventsQuery,
  useGetEventByIdQuery,
  useLazyGetEventsQuery,
  useCreateEventMutation,
  useDeleteEventMutation,
  useUpdateEventMutation,
} = eventsApi;