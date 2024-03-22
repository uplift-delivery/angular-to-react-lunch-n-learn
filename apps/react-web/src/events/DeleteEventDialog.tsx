import { FC, useCallback } from 'react';
import {
  CustomDialog,
  CustomDialogContent,
  CustomDialogProps,
  CustomDialogTitle,
  DeleteDialogActions,
} from '@uplift-lunch-n-learn/react-ui';
import { EventModel } from '@uplift-lunch-n-learn/models';
import { useDeleteEventMutation } from '@uplift-lunch-n-learn/react-store';

export type DeleteEventDialogProps = Omit<
  CustomDialogProps,
  'children' | 'open'
> & {
  event?: EventModel | null;
};
export const DeleteEventDialog: FC<DeleteEventDialogProps> = ({
  event,
  onClose,
  ...props
}) => {
  const [deleteMutation] = useDeleteEventMutation();

  const closeHandler = useCallback(() => {
    onClose && onClose({}, 'backdropClick');
  }, [onClose]);
  const onSave = useCallback(async () => {
    if (!event) {
      return;
    }

    try {
      await deleteMutation(event.id).unwrap();
      closeHandler();
    } catch (error) {
      console.error('failed to delete event', error);
    }
  }, [event, deleteMutation, closeHandler]);

  return (
    <CustomDialog open={Boolean(event)} onClose={onClose} {...props}>
      <CustomDialogTitle>Delete Event {event?.name}</CustomDialogTitle>
      <CustomDialogContent>
        Are you sure you want to delete the event '{event?.name}'?
      </CustomDialogContent>
      <DeleteDialogActions onDelete={onSave} onCancel={closeHandler} />
    </CustomDialog>
  );
};
