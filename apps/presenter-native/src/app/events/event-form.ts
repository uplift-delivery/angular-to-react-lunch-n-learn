import { z } from 'zod';
import { EventModel } from '@uplift-lunch-n-learn/models';
import { useMemo } from 'react';
import { formatDate } from 'date-fns';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const EventSchema = z.object({
  name: z.string().min(1),
  location: z.string().min(1),
  date: z.string(),
});

export type EventFields = z.infer<typeof EventSchema>;

export function useEventForm(existing?: EventModel | null) {
  const defaultValues = useMemo(
    () => ({
      location: existing?.location ?? '',
      date: existing?.date ?? formatDate(new Date(), 'yyyy/MM/dd'),
      name: existing?.name ?? '',
    }),
    [existing]
  );
  return useForm<EventFields>({
    mode: 'onBlur',
    resolver: zodResolver(EventSchema),
    defaultValues: defaultValues,
  });
}
