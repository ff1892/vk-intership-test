import { TFormValues } from './types';

export const MINUTE_STEP = 5;

export const BUILDINGS = ['A', 'Б'];

export const Floors = {
  Min: 3,
  Max: 27,
};

export const Rooms = {
  Min: 1,
  Max: 10,
};

export const defaultFormValues: TFormValues = {
  building: '',
  floor: '',
  room: '',
  day: null,
  startTime: null,
  endTime: null,
  comment: '',
};
