import { FakeHttpServer } from './fake-http-server';

beforeAll(() => {
  FakeHttpServer.listen();
});

beforeEach(() => {
  FakeHttpServer.reset();
});

afterAll(() => {
  FakeHttpServer.close();
});
