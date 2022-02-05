import { Button, List, Link, ListItem, TextField, Typography } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { Store } from '../utilities/Store';
import useStyles from '../utilities/styles';
import Layout from './components/Shared/Layout';

export default function Login() {
  const router = useRouter()
  const {redirect} = router.query; // login? redirect = /shipping
  const {state, dispatch} = useContext(Store)
 /*  const {userInfo} = state; */
 /*  if(userInfo){
    router.push('/')
  } */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/users/login', {
        email,
        password,
      });
      /* dispatch({type:'USER_LOGIN', payload:data})
      Cookies.set('userInfo', data) */
      router.push(redirect || '/')
    } catch (err) {
      alert(err.response.data ? err.response.data.message : err.message);
    }
  };
  return <Layout title="Login">
      <form onSubmit={submitHandler} className={classes.form}>
          <Typography component='h1' variant='h1'>Login</Typography>
          <List>
              <ListItem>
                  <TextField
                  variant='outlined' 
                  fullWidth id='email' 
                  label='Email'
                  inputProps={{type:'email'}}
                  onChange={(e) => setEmail(e.target.value)}
                  >
                  </TextField>
                </ListItem>
                <ListItem>
                  <TextField
                  variant='outlined' 
                  fullWidth id='password' 
                  label='Password'
                  inputProps={{type:'password'}}
                  onChange={(e) => setPassword(e.target.value)}
                  >
                  </TextField>
                </ListItem>
                <ListItem>
                 <Button variant='contained' type='submit' fullWidth color='primary' >Login</Button>
                </ListItem>
                <ListItem>
                 Don not have an account? &nbsp; <NextLink  href='/register' passHref><Link to='/register' sx={{cursor:'pointer'}}>Register</Link></NextLink>
                </ListItem>
              
          </List>
      </form>

  </Layout>;
}