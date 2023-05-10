import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TFormSelect } from '@src/types';

export default function FormSelect(props: TFormSelect) {

  const { label, text, options } = props;

  const [optionValue, setOptionValue] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setOptionValue(event.target.value as string);
  };

  return (
    <Box sx={{ maxWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id={`${label}-form-select`}>{ text }</InputLabel>
        <Select
          labelId={`${label}-form-select`}
          value={optionValue}
          label={label}
          onChange={handleChange}
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
    </Box>
  );
}
