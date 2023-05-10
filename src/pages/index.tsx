import Head from 'next/head';
import { Roboto } from 'next/font/google';
import styles from '@src/styles/Home.module.css';
import FormSelect from '@src/components/FormSelect';
import { TFormSelect } from '@src/types';
import { BUILDINGS, Floors, Rooms } from '@src/constants';
import { getMinMaxArray, getOptionsProps } from '@src/utils';
import FormComment from '@src/components/FormComment';
import FormDatePicker from '@src/components/FormDatePicker';
import FormTimePicker from '@src/components/FormTimePicker';
import Button from '@mui/material/Button';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const buildingSelectProps: TFormSelect = {
  label: 'building',
  text: 'Башня',
  options: getOptionsProps(BUILDINGS),
};

const floorSelectProps: TFormSelect = {
  label: 'floor',
  text: 'Этаж',
  options: getOptionsProps(
    getMinMaxArray(Floors.Min, Floors.Max)),
};

const roomSelectProps: TFormSelect = {
  label: 'room',
  text: 'Комната',
  options: getOptionsProps(
    getMinMaxArray(Rooms.Min, Rooms.Max)),
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Переговорная</title>
        <meta name='description' content='Форма бронирования переговорной' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${styles.main} ${roboto.className}`}>
        <h1>Переговорная</h1>
        <FormDatePicker />
        <FormTimePicker
          label='Время начала'
          disabledPast
        />
        <FormTimePicker
          label='Время окончания'
        />
        <FormSelect {...buildingSelectProps} />
        <FormSelect {...floorSelectProps} />
        <FormSelect {...roomSelectProps} />
        <FormComment />
        <Button
          variant='contained'
          type='submit'
          size='large'
        >
          Отправить
        </Button>
        <Button
          variant='outlined'
          type='reset'
          size='large'
        >
          Очистить
        </Button>
      </main>
    </>
  );
}
