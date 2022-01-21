import { Box, Button, Card, Grid, List, ListItem, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import data from '../../utilities/data';
import useStyles from '../../utilities/styles';
import Layout from '../components/Shared/Layout';

const ProductScreen = () => {
    const classes = useStyles();
    const router = useRouter();
    const {slug} = router.query;
    const product = data.products.find((a) => a.slug === slug)
    if(!product){
        return <div> Product Not Found</div>
    }
    return (
        <Box>
            <Layout title={product.name}>
                <Box  className={classes.section}>
                    <Link href={'/'} passHref>
                        <Typography sx={{cursor:'pointer'}}>Back to products</Typography>
                    </Link>
                </Box>
                <Grid container spacing={1}>
                    <Grid item md={6} xs={12}>
                        <Image 
                        src={product.image} alt={product.name}
                        width={640}
                        height={640}
                        ></Image>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <List>
                            <ListItem> <Typography component='h1'> Name: {product.name} </Typography> </ListItem>
                            <ListItem> <Typography> Category: {product.category} </Typography> </ListItem>
                            <ListItem> <Typography> Type: {product.type}</Typography>  </ListItem>
                            <ListItem> <Typography>Rating:  {product?.raging} stars ({product?.numReviews})</Typography> </ListItem>
                            <ListItem> 
                            <Typography>  Description: {product.description}</Typography> 
                            </ListItem>
                        </List>
                    </Grid>

                    <Grid itme md={3} xs={12}>
                        <Card>
                            <List>
                                <ListItem>
                                    <Grid container>
                                        <Grid item xs={6}> <Typography>Price</Typography></Grid>
                                        <Grid item xs={6}> <Typography>${product.price}</Typography></Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem>
                                    <Grid container>
                                        <Grid item xs={6}> <Typography>Status</Typography></Grid>
                                        <Grid item xs={6}> <Typography>{product.countInStock > 0 ? 'In stock' : 'Unavailable Now'}</Typography></Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem>
                                    <Button fullWidth variant='contained' color='primary'>
                                        Add to cart
                                    </Button>
                                </ListItem>
                            </List>

                        </Card>
                    </Grid>


                </Grid>
            </Layout>
        </Box>
    );
};

export default ProductScreen;
