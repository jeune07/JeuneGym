import React from 'react';
import { Stack, Typography } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <Stack direction="column" justifyContent="center" alignItems="center" width="100%">
    <Typography>
      We are procecing your request
    </Typography>
    <InfinitySpin color="grey" />
    
    
  
  </Stack>
);

export default Loader;