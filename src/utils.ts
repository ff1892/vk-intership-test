import dayjs from 'dayjs';
import { TFormOption, TDate, TFormValues } from './types';
import { MINUTE_STEP } from './constants';
import { FieldValues } from 'react-hook-form';

export const getMinMaxArray = (min: number, max:number) => {
  const arrayLength = max - min + 1;
  return new Array(arrayLength).fill(null).map((_, i) => (
    min + i
  ));
};

export const getOptionsProps = (
  options: Array<string | number>): TFormOption[] => (
  options.map((option) => ({ value: option, text: option}))
);

export const isToday = (date: TDate | null) => (
  dayjs().isSame(date, 'd')
);

export const getMinNextTime = (date: TDate | null) => (
   date ? date.add(MINUTE_STEP, 'minute') : null
);

export const validateStartTime = (state: FieldValues) => {
  const { day = null, startTime = null } = state;
  if (isToday(day) && dayjs().isAfter(startTime)) {
    return 'Не можем отправить вас в прошлое';
  }
  return true;
};

export const validateEndTime = (state: FieldValues, name: string) => {
  const { startTime = null, endTime = null } = state;
  if (dayjs(startTime).isAfter(endTime) && name === 'endTime') {
    return 'Это не Довод :)';
  }
  return true;
};
