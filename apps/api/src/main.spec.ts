import { TestConfig } from '../testing/test-config';

describe('api', () => {
  test('when getting events then returns page of events', async () => {
    const response = await fetch(`${TestConfig.serverUrl}/events`);

    expect(response.status).toEqual(200);
  });
});
