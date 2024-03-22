import { TestConfig } from './test-config';
import { logger } from '../src/shared/logger';

beforeAll(async () => {
  await import('../src/main');
  await waitForApiToBeReady();
});

afterAll(async () => {
  await import('../src/main').then(({ server }) => server.close());
});

async function waitForApiToBeReady() {
  let response: Response | null = null;
  do {
    try {
      response = await fetch(`${TestConfig.serverUrl}/.health`);
    } catch {
      logger.info('api is not ready yet');
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  } while (!response?.ok);
}
