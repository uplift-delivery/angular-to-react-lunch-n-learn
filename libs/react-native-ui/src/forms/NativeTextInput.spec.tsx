import { render } from '@testing-library/react-native';
import { useForm } from 'react-hook-form';
import { NativeTextInput } from './NativeTextInput';
import { useMemo } from 'react';

describe('NativeTextInput', () => {
  test('when rendered with value then input contains value', () => {
    const { getByLabelText } = render(<TestingForm name={'bob'} />);

    expect(getByLabelText('name')).toHaveProp('value', 'bob');
  });

  function TestingForm({ name = '' }) {
    const defaultValues = useMemo(() => ({ name }), [name]);
    const { control } = useForm<{ name: string }>({
      defaultValues,
    });

    return <NativeTextInput name={'name'} label={'name'} control={control} />;
  }
});
