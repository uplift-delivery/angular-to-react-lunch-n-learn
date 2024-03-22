import { z } from 'zod';
import { parseISO } from 'date-fns';

export const EventModelSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  location: z.string().min(1),
  date: z.union([z.string(), z.date()]).refine((value) => {
    if (typeof value === 'string') {
      return parseISO(value);
    }
    return value;
  }),
});

export type EventModel = z.infer<typeof EventModelSchema>;
