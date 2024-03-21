import { FC, ReactElement, useMemo } from 'react';
import {
  CircularProgress,
  CircularProgressProps,
  Typography,
} from '@mui/material';

export type CircularLoadingIndicatorProps = CircularProgressProps & {
  text?: string | ReactElement;
};

export const CircularLoadingIndicator: FC<CircularLoadingIndicatorProps> = ({
  text,
  ...props
}) => {
  const textElement = useMemo(() => {
    if (text === undefined) {
      return null;
    }

    return typeof text === 'string' ? (
      <Typography variant={'h3'}>{text}</Typography>
    ) : (
      text
    );
  }, [text]);
  return (
    <>
      <CircularProgress variant={'indeterminate'} {...props} />
      {textElement}
    </>
  );
};
