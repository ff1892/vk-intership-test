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
import { Stack, Typography } from '@mui/material';

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
    console.log(JSON.stringify(formData));
    reset();
  };

  return(
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          justifyContent='space-between'
          spacing={{ xs: 1, sm: 2, md: 5, lg: 8 }}
          direction={{ xs: 'column', sm: 'row' }}
          mb={2}
        >
          <Stack sx={{flex: 1}}>
            <Typography variant='h4' mb={4}>
                Место
            </Typography>
            <FormSelect {...buildingSelectProps} />
            <FormSelect {...floorSelectProps} />
            <FormSelect {...roomSelectProps} />
          </Stack>
          <Stack sx={{flex: 1}}>
            <Typography variant='h4' mb={4}>
              Время
            </Typography>
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
          </Stack>
        </Stack>
        <FormComment />
        <Stack
          justifyContent='space-between'
          direction='row'
          spacing={2}
        >
          <Button
            variant='outlined'
            type='reset'
            size='large'
            onClick={() => reset()}
          >
            Очистить
          </Button>
          <Button
            variant='contained'
            type='submit'
            size='large'
            disabled={formState.isSubmitting}
          >
            Отправить
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
}
