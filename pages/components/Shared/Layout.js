
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { textAlign } from '@mui/system';
import Head from 'next/head';
import React from 'react';
import useStyles from '../../../utilities/styles';

const Layout = ({children}) => {

    const classes = useStyles()
    return (
        <div>
            <Head>
                <title>Tripto Radhuni || We guarantee the quality!!  </title>
            </Head>
            <AppBar position='static' className={classes.navbar}>
                <Toolbar>
                    <Typography>
                      Tripto Radhuni  
                    </Typography>
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