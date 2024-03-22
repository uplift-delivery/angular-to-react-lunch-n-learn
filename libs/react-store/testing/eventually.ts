import { addMilliseconds } from 'date-fns';
import { waitForMilliseconds } from './wait-for-milliseconds';

export type EventuallyOptions = Partial<{
  /**
   * Time to wait between evaluating assertion
   *
   * @default is 200 ms
   */
  delayMilliseconds: number;
  /**
   * Total wait time before bailing on the assertion
   *
   * @default is 30 seconds (30,000 ms)
   */
  waitTimeMilliseconds: number;
}>;

export async function eventually<T = unknown>(
  assertion: () => T | Promise<T>,
  options?: EventuallyOptions
) {
  const waitTime = options?.waitTimeMilliseconds ?? 30_000;
  const delay = options?.delayMilliseconds ?? 200;
  const endTime = addMilliseconds(new Date(), waitTime).getTime();

  let error: unknown | null = null;
  do {
    try {
      return await assertion();
    } catch (err) {
      error = err;
      await waitForMilliseconds(delay);
    }
  } while (new Date().getTime() <= endTime);

  throw error;
}
