import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ru';


export default function FormDatePicker () {

  const [value, setValue] = useState<Dayjs | null>(dayjs());

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale='ru'
    >
      <DatePicker
        label='День'
        onChange={(value: dayjs.Dayjs | null) => setValue(value)}
        disablePast
      />
    </LocalizationProvider>
  );
}
