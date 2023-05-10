import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TFormTimePicker } from '@src/types';
import 'dayjs/locale/ru';

export default function FormTimePicker({ label, disabledPast }: TFormTimePicker) {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale='ru'
    >
        <TimePicker
          label={label}
          disablePast={disabledPast}
        />
    </LocalizationProvider>
  );
}
