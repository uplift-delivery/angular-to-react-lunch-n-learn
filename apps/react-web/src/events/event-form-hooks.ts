import {
  EventFormFields,
  EventFormSchema,
  EventModel,
} from '@uplift-lunch-n-learn/models';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';

export function useEventForm(existing?: EventModel | null) {
  const defaultValues = useMemo(
    () => ({
      location: existing?.location ?? '',
      date: existing?.date ?? new Date(),
      name: existing?.name ?? '',
    }),
    [existing]
  );
  return useForm<EventFormFields>({
    mode: 'onChange',
    resolver: zodResolver(EventFormSchema),
    defaultValues: defaultValues,
  });
}
