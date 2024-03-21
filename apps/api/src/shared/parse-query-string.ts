import { Request } from 'express';

export function parseQueryStringAsNumber(
  key: string,
  req: Request
): number | null {
  const value = req.query[key];
  if (!value) {
    return null;
  }

  const numeric = Number(value);
  return isNaN(numeric) ? null : numeric;
}
