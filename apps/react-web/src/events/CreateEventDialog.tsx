import { FC, useCallback } from 'react';
import {
  ControlledDatePicker,
  ControlledTextField,
  CustomDialogTitle,
  FormDialog,
  FormDialogContent,
  FormDialogProps,
  SaveDialogActions,
} from '@uplift-lunch-n-learn/react-ui';
import { EventFields, useEventForm } from './EventSchema';
import { useCreateEventMutation } from '@uplift-lunch-n-learn/react-store';

export type CreateEventDialogProps = Omit<
  FormDialogProps,
  'children' | 'onSubmit'
>;

export const CreateEventDialog: FC<CreateEventDialogProps> = ({
  onClose,
  ...props
}) => {
  const [createMutation] = useCreateEventMutation();
  const { handleSubmit, control, reset } = useEventForm();

  const closeHandler = useCallback(() => {
    reset();
    onClose && onClose({}, 'backdropClick');
  }, [reset, onClose]);
  const submitHandler = useCallback(
    async (fields: EventFields) => {
      await createMutation(fields);
      closeHandler();
    },
    [createMutation, closeHandler]
  );

  return (
    <FormDialog
      onClose={closeHandler}
      onSubmit={handleSubmit(submitHandler)}
      {...props}
    >
      <CustomDialogTitle>Create New Event</CustomDialogTitle>
      <FormDialogContent>
        <ControlledTextField name={'name'} control={control} label={'Name'} />
        <ControlledTextField
          name={'location'}
          control={control}
          label={'Location'}
        />
        <ControlledDatePicker name={'date'} control={control} label={'Date'} />
      </FormDialogContent>
      <SaveDialogActions
        onSave={handleSubmit(submitHandler)}
        onCancel={closeHandler}
      />
    </FormDialog>
  );
};
