import { BUILDINGS, Floors, Rooms } from '@src/constants';
import { TFormSelect } from '@src/types';
import { getOptionsProps, getMinMaxArray } from '@src/utils';

export const buildingSelectProps: TFormSelect = {
  label: 'building',
  text: 'Башня',
  options: getOptionsProps(BUILDINGS),
};

export const floorSelectProps: TFormSelect = {
  label: 'floor',
  text: 'Этаж',
  options: getOptionsProps(
    getMinMaxArray(Floors.Min, Floors.Max)),
};

export const roomSelectProps: TFormSelect = {
  label: 'room',
  text: 'Комната',
  options: getOptionsProps(
    getMinMaxArray(Rooms.Min, Rooms.Max)),
};
