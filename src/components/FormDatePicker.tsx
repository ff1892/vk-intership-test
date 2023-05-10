import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/ru';
import { Controller, useFormContext } from 'react-hook-form';
import InputWrapper from './InputWrapper';
import dayjs from 'dayjs';
import { TFormDatePicker } from '@src/types';

export default function FormDatePicker ({ onChange, name }: TFormDatePicker) {

  const { control } = useFormContext();

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale='ru'
    >
      <Controller
        control={control}
        defaultValue={null}
        name={name}
        rules={{
          validate: {
            min: (date) => dayjs.isDayjs(date) || 'Укажите дату',
          }
        }}
        render={({ field: { ref, ...field }, fieldState }) => (
          <InputWrapper
            isError={!!fieldState.error}
            message={fieldState.error?.message}
          >
            <DatePicker
              {...field}
              inputRef={ref}
              label='День'
              disablePast
              />
          </InputWrapper>
        )}
      />
    </LocalizationProvider>
  );
}
