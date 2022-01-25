
import { AppBar, Box, Container, createTheme, CssBaseline, Link, Switch, ThemeProvider, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import React, { useContext } from 'react';
import useStyles from '../../../utilities/styles';
import NextLink from 'next/link'
import { Store } from '../../../utilities/Store';
import Cookies from 'js-cookie'



const Layout = ({title, children, description}) => {
    const {state, dispatch} = useContext(Store)
    const {darkMode} = state;
    const theme = createTheme({
        typography:{
            h1:{
                fontSize:'1.6rem',
                fontWeight:400,
                margin:'1rem 0'
            },
            h2:{
                fontSize:'1.4rem',
                fontWeight:400,
                margin:'1rem 0'
            },
            body1:{
                fontWeight:'normal'
            }
           
        },
        palette:{
         mode: darkMode ? 'dark' : 'light',
         primary:{
             main:'#f0c000'
         },
         secondary:{
             main:'#208080'
         }

        }

    })
    const classes = useStyles()
    const darkModeChangeHandler = () =>{
        dispatch({type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' })
        const newDdarkMode = !darkMode;
        Cookies.set('darkMode', newDdarkMode ? 'ON': 'OFF')
    }
    return (
        <Box>
            <Head>
                <title>{title? `${title} - Tripto Radhuni || We guarantee the quality!!`: 'Tripto Radhuni || We guarantee the quality!! '} </title>
                {description && <meta name='description' content={description}></meta>}
            </Head>
            <ThemeProvider theme={theme}>
            <CssBaseline></CssBaseline>
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
                        <Switch checked={darkMode} onChange={darkModeChangeHandler}></Switch>
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
            </ThemeProvider>
        </Box>
    );
};

export default Layout;