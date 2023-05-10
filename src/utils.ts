import { TFormOption } from './types';

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
