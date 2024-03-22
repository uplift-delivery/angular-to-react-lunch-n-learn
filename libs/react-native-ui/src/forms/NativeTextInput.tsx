import { TextInput, TextInputProps } from 'react-native-paper';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form';

export type NativeTextInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Omit<ControllerProps<TFieldValues, TName>, 'render'> & {
  label: TextInputProps['label'];
};

export function NativeTextInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: NativeTextInputProps<TFieldValues, TName>) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, fieldState }) => (
        <TextInput
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          label={props.label}
          accessibilityLabel={props.name}
          error={fieldState.invalid}
        />
      )}
    />
  );
}
