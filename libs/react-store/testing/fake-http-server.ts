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

type HttpResponseResolverInfo = Parameters<HttpResponseResolver>[0];
export type RequestOptions = Partial<{
  delay: DelayMode;
  status: number;
  captureHttp?: (info: HttpResponseResolverInfo) => unknown | Promise<unknown>;
}>;

const settings = ModelFactory.settings();
const server = setupServer();

async function handleRequestOptions(
  info: HttpResponseResolverInfo,
  options?: RequestOptions
) {
  options?.captureHttp && (await options.captureHttp(info));
  options?.delay && (await delay(options.delay));
}

function setupGetEvents(
  page: PagedResultModel<EventModel>,
  options?: RequestOptions
) {
  server.use(
    http.get(`${settings.baseUrl}/events`, async (info) => {
      await handleRequestOptions(info, options);

      const status = options?.status ?? 200;
      return HttpResponse.json(page, { status });
    })
  );
}

function setupCreateEvent(result: EventModel, options?: RequestOptions) {
  server.use(
    http.post(getFullApiUrl('/events'), async (info) => {
      await handleRequestOptions(info, options);

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
      await handleRequestOptions(info, options);

      const status = options?.status ?? 200;
      return HttpResponse.json(result, { status });
    })
  );
}

function setupUpdateEvent(id: string, options?: RequestOptions) {
  server.use(
    http.get(getFullApiUrl(`/events/${id}`), async (info) => {
      await handleRequestOptions(info, options);

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
  reset: () => {
    server.resetHandlers();
    server.use(http.get('/settings.json', () => HttpResponse.json(settings)));
  },
  close: () => server.close(),
  setupGetEvents,
  setupCreateEvent,
  setupGetEventById,
  setupUpdateEvent,
};
