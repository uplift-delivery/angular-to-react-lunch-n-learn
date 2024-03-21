import { setupServer } from 'msw/node';
import {
  http,
  HttpResponse,
  delay,
  DelayMode,
  HttpResponseResolver,
} from 'msw';
import { ModelFactory } from '@uplift-lunch-n-learn/models/testing';
import { EventModel, PagedResultModel } from '@uplift-lunch-n-learn/models';

export type RequestOptions = Partial<{
  delay: DelayMode;
  status: number;
  captureHttp?: (
    info: Parameters<HttpResponseResolver>[0]
  ) => unknown | Promise<unknown>;
}>;

const settings = ModelFactory.settings();
const DEFAULT_HANDLERS = [
  http.get('/settings.json', () => {
    return HttpResponse.json(settings);
  }),
];
const server = setupServer(...DEFAULT_HANDLERS);

function setupGetEvents(
  page: PagedResultModel<EventModel>,
  options?: RequestOptions
) {
  server.use(
    http.get(`${settings.baseUrl}/events`, async (info) => {
      options?.captureHttp && (await options.captureHttp(info));
      options?.delay && (await delay(options.delay));

      const status = options?.status ?? 200;
      return HttpResponse.json(page, { status });
    })
  );
}

function setupCreateEvent(result: EventModel, options?: RequestOptions) {
  server.use(
    http.post(getFullApiUrl('/events'), async (info) => {
      options?.captureHttp && (await options.captureHttp(info));
      options?.delay && (await delay(options.delay));

      const status = options?.status ?? 201;
      return HttpResponse.json(result, { status });
    })
  );
}

function setupGetEventById(
  id: string,
  result: EventModel,
  options?: RequestOptions
) {
  server.use(
    http.get(getFullApiUrl(`/events/${id}`), async (info) => {
      options?.captureHttp && (await options.captureHttp(info));
      options?.delay && (await delay(options.delay));

      const status = options?.status ?? 200;
      return HttpResponse.json(result, { status });
    })
  );
}

function setupUpdateEvent(id: string, options?: RequestOptions) {
  server.use(
    http.get(getFullApiUrl(`/events/${id}`), async (info) => {
      options?.captureHttp && (await options.captureHttp(info));
      options?.delay && (await delay(options.delay));

      const status = options?.status ?? 204;
      return HttpResponse.text(null, { status });
    })
  );
}

function getFullApiUrl(path: string) {
  return `${settings.baseUrl}${path}`;
}

export const FakeHttpServer = {
  listen: () => server.listen({ onUnhandledRequest: 'error' }),
  reset: () => server.resetHandlers(...DEFAULT_HANDLERS),
  close: () => server.close(),
  setupGetEvents,
  setupCreateEvent,
  setupGetEventById,
  setupUpdateEvent,
};
