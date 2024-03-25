import {
  EventFormFields,
  EventFormSchema,
  EventModel,
} from '@uplift-lunch-n-learn/models';
import { useMemo } from 'react';
import { formatDate } from 'date-fns';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export function useEventForm(existing?: EventModel | null) {
  const defaultValues = useMemo(
    () => ({
      location: existing?.location ?? '',
      date: existing?.date ?? formatDate(new Date(), 'yyyy/MM/dd'),
      name: existing?.name ?? '',
    }),
    [existing]
  );
  return useForm<EventFormFields>({
    mode: 'onBlur',
    resolver: zodResolver(EventFormSchema),
    defaultValues: defaultValues,
  });
}
