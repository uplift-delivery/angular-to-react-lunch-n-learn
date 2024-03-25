import { z } from 'zod';

export type PagedResultModel<T> = {
  items: T[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
};

export function pagedResultModel<T extends z.ZodTypeAny>(schema: T) {
  return z.object({
    pageSize: z.number(),
    pageNumber: z.number(),
    items: z.array(schema),
    totalCount: z.number(),
  });
}
