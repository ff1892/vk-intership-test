import dayjs from 'dayjs';

export type TDate = dayjs.Dayjs;
export type Nullable<T> = T | null;

export type TFormOption = {
  value: string | number,
  text: string | number,
}

export type TFormSelect = {
  label: string,
  text: string,
  options: TFormOption[],
}

export type TFormTimePicker = {
  label: string,
  name: string,
  disabledPast?: boolean,
  minTime?: TDate | undefined,
  onChange?: (value: TDate| null) => void;
}

export type TFormDatePicker = {
  name:  string,
  value?: TDate | null;
  onChange?: (value: TDate| null) => void,
}

export type TFormValues = {
  building: Nullable<string>,
  floor: Nullable<string>,
  room: Nullable<string>,
  day: Nullable<TDate>,
  startTime: Nullable<TDate>,
  endTime: Nullable<TDate>,
  comment: string,
}
