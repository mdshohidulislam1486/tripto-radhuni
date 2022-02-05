import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import  {useRouter}  from 'next/router';
import { Store } from '../utilities/Store';



export default function Shipping() {
  const router = useRouter()
  const {state, dispatch} = useContext(Store)
  const {userInfo} = state;
  if(userInfo){
    router.push('/login?redirect=/shipping')
  }
  return <div>
    <Typography></Typography>
    <Box> shipping </Box>
  </div>;
}
