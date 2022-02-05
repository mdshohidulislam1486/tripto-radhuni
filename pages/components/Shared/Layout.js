
import { AppBar, Box, Container, createTheme, CssBaseline, Link, Switch, ThemeProvider, Toolbar, Typography, Badge, Button, Menu, MenuItem } from '@mui/material';
import Head from 'next/head';
import React, { useContext } from 'react';
import useStyles from '../../../utilities/styles';
import NextLink from 'next/link'
import { Store } from '../../../utilities/Store';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useRouter } from 'next/router';


const Layout = ({title, children, description}) => {
    const router = useRouter();
    const {state, dispatch} = useContext(Store)
    const {darkMode, cart, userInfo} = state;
 
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
    const classes = useStyles();
    const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
     };
    
     const [anchorEl, setAnchorEl] = useState(null);
    const loginClickHandler = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const loginMenuCloseHandler = () => {
        setAnchorEl(null);
    };
    const logoutClickHandler = () => {
        setAnchorEl(null);
        dispatch({ type: 'USER_LOGOUT' });
        Cookies.remove('userInfo');
        Cookies.remove('cartItems');
        router.push('/');
    };
    return (
        <Box>
            <Head>
                <title>{title? `${title} - Tripto Radhuni || We guarantee the quality!!`: 'Tripto Radhuni || We guarantee the quality!! '} </title>
                {description && <meta name='description' content={description}></meta>}
            </Head>
            <ThemeProvider theme={theme}>
            <CssBaseline></CssBaseline>
            <AppBar position='static' className={classes.navbar} sx={{backgroundColor:'#208080'}}>
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
                        <NextLink href="/cart" passHref>
                                <Link>
                                {cart.cartItems.length > 0 ? (
                                    <Badge
                                    color="secondary"
                                    badgeContent={cart.cartItems.length}
                                    >
                                    Cart
                                    </Badge>
                                ) : (
                                    'Cart'
                                )}
                                </Link>
                        </NextLink>
                        <NextLink href='/' passHref>
                        {userInfo ? (
                            <>
                            <Button
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={loginClickHandler}
                                className={classes.navbarButton}
                            >
                                {userInfo.name}
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={loginMenuCloseHandler}
                            >
                                <MenuItem onClick={loginMenuCloseHandler}>Profile</MenuItem>
                                <MenuItem onClick={loginMenuCloseHandler}>
                                My account
                                </MenuItem>
                                <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <NextLink href="/login" passHref>
                                {userInfo? <Button>{userInfo.name}</Button>:
                                <Link href='/login'>Login</Link>
                                }
                            
                            </NextLink>
                        )}
                            
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