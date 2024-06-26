import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers';
import { formatISO } from 'date-fns';
import { Typography } from '@mui/material';

export type ControlledDatePickerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Omit<ControllerProps<TFieldValues, TName>, 'render'> & {
  label?: DatePickerProps<string>['label'];
};

export function ControlledDatePicker<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: ControlledDatePickerProps<TFieldValues, TName>) {
  return (
    <Controller
      {...props}
      render={({ field, fieldState }) => (
        <DatePicker
          slotProps={{ textField: { error: fieldState.invalid } }}
          format={'MM/dd/yyyy'}
          {...field}
          label={props.label}
        />
      )}
    />
  );
}
