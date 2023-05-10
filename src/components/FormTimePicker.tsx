import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TFormTimePicker } from '@src/types';
import { Controller, useFormContext } from 'react-hook-form';
import InputWrapper from './InputWrapper';
import 'dayjs/locale/ru';
import dayjs from 'dayjs';
import { validateEndTime, validateStartTime } from '@src/utils';

export default function FormTimePicker(props: TFormTimePicker) {
  const { label, disabledPast, minTime, onChange, name } = props;

  const { control, getValues } = useFormContext();

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
            exists: (date) => dayjs.isDayjs(date) || 'Укажите время',
            start: () => validateStartTime(getValues()),
            end: () => validateEndTime(getValues(), name),
          }
        }}
        render={({ field: { ref, ...field }, fieldState }) => (
          <InputWrapper
            isError={!!fieldState.error}
            message={fieldState.error?.message}
          >
            <TimePicker
              {...field}
              inputRef={ref}
              defaultValue={dayjs()}
              label={label}
              disablePast={disabledPast}
              minTime={minTime}
            />
          </InputWrapper>
        )}
      />

    </LocalizationProvider>
  );
}
