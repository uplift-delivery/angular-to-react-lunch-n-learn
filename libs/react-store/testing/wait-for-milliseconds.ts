export function waitForMilliseconds(time: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, time));
}
