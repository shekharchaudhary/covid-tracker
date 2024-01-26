import React from 'react';

import { Stack } from '@mui/material';

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Stack
      textAlign='center'
      display='flex'
      alignItems='center'
      flexDirection='column'
    >
      {children}
    </Stack>
  );
};
