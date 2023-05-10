import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';
import InputWrapper from './InputWrapper';

export default function FormComment() {

  const { control } = useFormContext();

  return (
    <Controller
        control={control}
        defaultValue={''}
        name='comment'
        render={({ field: { ref, ...field }, fieldState }) => (
          <InputWrapper
            isError={!!fieldState.error}
            message={fieldState.error?.message}
          >
            <TextField
              {...field}
              inputRef={ref}
              fullWidth
              label='Комментарий'
              rows={4}
              multiline
            />
          </InputWrapper>
        )}
      />

  );
}
