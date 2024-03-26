import { FC, useCallback } from 'react';
import {
  CustomDialogProps,
  CustomDialogTitle,
  SaveDialogActions,
  FormDialog,
  ControlledTextField,
  ControlledDatePicker,
  FormDialogContent,
} from '@uplift-lunch-n-learn/react-ui';
import { EventFormFields, EventModel } from '@uplift-lunch-n-learn/models';
import { useEventForm } from './event-form-hooks';
import { useUpdateEventMutation } from '@uplift-lunch-n-learn/react-store';

export type EditEventDialogProps = Omit<
  CustomDialogProps,
  'children' | 'open'
> & {
  event?: EventModel | null;
};

export const EditEventDialog: FC<EditEventDialogProps> = ({
  event,
  onClose,
  ...props
}) => {
  const [updateMutation] = useUpdateEventMutation();
  const { handleSubmit, control, reset } = useEventForm(event);

  const closeHandler = useCallback(() => {
    reset();
    onClose && onClose({}, 'backdropClick');
  }, [reset, onClose]);
  const submitHandler = useCallback(
    async (fields: EventFormFields) => {
      if (!event) {
        return;
      }
      try {
        await updateMutation({ ...event, ...fields }).unwrap();
        closeHandler();
      } catch (error) {
        console.error('failed to save event', error);
      }
    },
    [event, updateMutation, closeHandler]
  );

  return (
    <FormDialog
      open={Boolean(event)}
      onSubmit={handleSubmit(submitHandler)}
      onClose={closeHandler}
      {...props}
    >
      <CustomDialogTitle>Edit Event</CustomDialogTitle>
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
