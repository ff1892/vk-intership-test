import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TFormSelect } from '@src/types';
import InputWrapper from './InputWrapper';
import { Controller, useFormContext } from 'react-hook-form';

export default function FormSelect(props: TFormSelect) {

  const { label, text, options } = props;
  const { control } = useFormContext();

  return (

    <Controller
        control={control}
        defaultValue={''}
        name={label}
        rules={{
          validate: {
            min: (date) =>  date !== '' || 'Укажите поле',
          }
        }}
        render={({ field: { ref, ...field }, fieldState }) => (
          <InputWrapper
            isError={!!fieldState.error}
            message={fieldState.error?.message}
          >

            <FormControl fullWidth>
              <InputLabel id={`${label}-form-select`}>{ text }</InputLabel>
              <Select
                {...field}
                inputRef={ref}
                labelId={`${label}-form-select`}
                label={label}
              >
                {
                  options.map(({ value, text }) => (
                    <MenuItem
                      key={value}
                      value={value}
                    >
                      { text }
                    </MenuItem>
                  ))
                }
                </Select>
            </FormControl>
          </InputWrapper>
        )}
      />
  );
}
