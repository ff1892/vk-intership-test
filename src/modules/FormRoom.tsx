import FormSelect from '@src/components/FormSelect';
import { TFormValues } from '@src/types';
import { getMinNextTime, isToday } from '@src/utils';
import FormComment from '@src/components/FormComment';
import FormDatePicker from '@src/components/FormDatePicker';
import FormTimePicker from '@src/components/FormTimePicker';
import Button from '@mui/material/Button';
import { buildingSelectProps, floorSelectProps, roomSelectProps } from './formStaticProps';
import { useForm, FormProvider } from 'react-hook-form';
import type { DefaultValues, SubmitHandler } from 'react-hook-form';
import { defaultFormValues } from '@src/constants';

const defaultValues: DefaultValues<TFormValues> = {...defaultFormValues};

export default function FormRoom() {


  const methods = useForm<TFormValues>({ defaultValues });
  const { handleSubmit, watch, reset, formState } = methods;

  const day = watch('day');
  const startTime = watch('startTime');

  const startTimeDisabledPast = isToday(day);
  const minNextTime = getMinNextTime(startTime);

  const onSubmit: SubmitHandler<TFormValues> = async (data, e) => {
    e?.preventDefault();
    const formData = {
      ...data,
      day: data.day?.format('DD-MM-YYYY'),
      startTime: data.startTime?.format('HH-mm'),
      endTime: data.endTime?.format('HH-mm'),
    };
  };

  return(
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
      <FormDatePicker name='day' />
        <FormTimePicker
          label='Время начала'
          name='startTime'
          disabledPast={startTimeDisabledPast}
        />
          <FormTimePicker
            label='Время окончания'
            name='endTime'
            minTime={minNextTime ?? undefined}
          />
        <FormSelect {...buildingSelectProps} />
        <FormSelect {...floorSelectProps} />
        <FormSelect {...roomSelectProps} />
        <FormComment />
        <Button
          variant='contained'
          type='submit'
          size='large'
          disabled={formState.isSubmitting}
        >
          Отправить
        </Button>
        <Button
          variant='outlined'
          type='reset'
          size='large'
          onClick={() => reset()}
        >
          Очистить
        </Button>
      </form>
    </FormProvider>
  );
}
