
import { AppBar, Box, Container, Link, Toolbar, Typography } from '@mui/material';
import { textAlign } from '@mui/system';
import Head from 'next/head';
import React from 'react';
import useStyles from '../../../utilities/styles';
import NextLink from 'next/link'

const Layout = ({title, children}) => {

    const classes = useStyles()
    return (
        <div>
            <Head>
                <title>{title? `${title} - Tripto Radhuni || We guarantee the quality!!`: 'Tripto Radhuni || We guarantee the quality!! '} </title>
            </Head>
            <AppBar position='static' className={classes.navbar}>
                <Toolbar>
                    <NextLink href='/' passHref>
                        <Link style={{textDecoration:"none"}}>
                            <Typography className={classes.brand}>
                                Tripto Radhuni  
                            </Typography>
                        </Link>
                    </NextLink>
                    <Box className={classes.grow}>
                        <NextLink href='/' passHref>
                            <Link style={{textDecoration:"none"}}>
                                    Cart 
                            </Link>
                        </NextLink>
                        <NextLink href='/' passHref>
                            <Link style={{textDecoration:"none"}}>     
                                    Login
                            </Link>
                        </NextLink>
                    </Box>
                   
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography variant='body2' >
                    All rights reserved Tripto Radhuni
                </Typography>
            </footer>
        </div>
    );
};

export default Layout;