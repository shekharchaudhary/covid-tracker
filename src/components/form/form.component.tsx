import React from 'react';
import { Stack, Autocomplete, TextField } from '@mui/material';
import './styles.css';

interface FormProps {
  options: string[];
  disabled: boolean;
  onChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: string | any
  ) => void;
}

export const Form: React.FC<FormProps> = ({ options, disabled, onChange }) => {
  return (
    <Stack>
      <Autocomplete
        className='autocomplete'
        options={options}
        renderInput={(params) => (
          <TextField {...params} label={'U.S. STATES'} />
        )}
        disabled={disabled}
        onChange={onChange}
      />
    </Stack>
  );
};
