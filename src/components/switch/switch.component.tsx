import React from 'react';
import { SwitchProps } from '../../types';

import {
  Stack,
  FormControlLabel,
  Switch as MuiSwitch,
  Typography,
} from '@mui/material';

export const Switch: React.FC<SwitchProps> = ({
  checked,
  label,
  textBeforSwitch,
  textAfterSwitch,
  handleChange,
}) => {
  return (
    <Stack display='flex' flexDirection='row' alignItems='baseline'>
      <Typography marginRight={'30px'}>{textBeforSwitch}</Typography>
      <FormControlLabel
        control={
          <MuiSwitch checked={checked} onChange={handleChange} color='info' />
        }
        label={label}
      />
      <Typography>{textAfterSwitch}</Typography>
    </Stack>
  );
};
