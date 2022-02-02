import { Typography, Box, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Select, MenuItem, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { Store } from '../utilities/Store';
import Layout from './components/Shared/Layout';

export default function CartScreen() {
    const {state} = useContext(Store)
    const {cartItems} = state;
  return <Layout title='Shopping Cart'>
      <Typography component='h1'  variant='h1'>
          Shopping Cart
      </Typography>
      {cartItems?.length === 0 ? (<Box>
          Cart is empty <Link href='/'> Go shopping</Link>
      </Box>):
      (
        <Grid container spacing={1}>
            <Grid item  md={9} xm={12}> 
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell align='right' >Quantity</TableCell>
                                <TableCell align='right' >Price</TableCell>
                                <TableCell align='right' >Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartItems?.map((item) =>(
                                <TableRow key={item._id}>
                                    <TableCell>
                                        <Link href={`/product/${item.slug}`} passHref  >
                                            <Link>
                                                <Image src={item.image} alt={item.name}
                                                width={50} height={50}> </Image>
                                            </Link>
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link  href={`/product/${item.slug}`} passHref  >
                                            <Link>
                                               <Typography>{item.name}</Typography>
                                            </Link>
                                        </Link>
                                    </TableCell>
                                    <TableCell align='right'>
                                        <Select value={item.quantity}>
                                            {[...Array(item.countInStock).keyrs()].map((x)=>(<MenuItem key={x+1} value={x+1}>{x + 1}</MenuItem>))}
                                        </Select>
                                    </TableCell>
                                    <TableCell align='right'>
                                        ${item.price}
                                    </TableCell>
                                    <TableCell align='right'>
                                        <Button variant='container' color='secondary'>x</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> </Grid>
            <Grid item md={3} xs={12}> Cart Actions</Grid>

        </Grid>
      )
      }
  </Layout>
}
