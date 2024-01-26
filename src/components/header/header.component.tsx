import React from 'react';

import { Stack, Typography } from '@mui/material';

import './styles.css';

export const Header: React.FC = () => {
  return (
    <Stack marginBottom='50px'>
      <Typography variant='h4' marginTop={'40px'}>
        Covid-19 Tracker
      </Typography>
      <Typography className='date-info'>
        <span>As of</span> <strong> March 7 , 2021 </strong>{' '}
        <span>no new data has been collected.</span>
      </Typography>
    </Stack>
  );
};
