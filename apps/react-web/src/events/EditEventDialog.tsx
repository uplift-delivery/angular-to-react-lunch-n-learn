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
import { EventModel } from '@uplift-lunch-n-learn/models';
import { EventFields, useEventForm } from './EventSchema';
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
    async (fields: EventFields) => {
      if (!event) {
        return;
      }
      await updateMutation({ ...event, ...fields });
      closeHandler();
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
