import { MouseEvent, MouseEventHandler } from 'react';

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
  disabledPast?: boolean,
}
