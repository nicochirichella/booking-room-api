// create Header component

import { useState } from 'react';
import { AppBar, Toolbar, makeStyles, InputBase, Typography, Avatar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import logo from '../images/hotelLogo.png';
import { Link } from 'react-router-dom';

export const Header = () => {
    const classes = useStyle();
  
    const displayDesktop = () => { 
        return (
            <Toolbar className={ classes.toolbar }>
                <Link  to="/">
                    <img src={logo} className={ classes.logo }/>
                </Link>
                <div className={ classes.search }>
                    <InputBase fullWidth placeholder='Search here ...' inputProps={{ className: classes.input}} />
                    <SearchIcon />
                </div>
                <div className={ classes.right }>
                    <Typography> Sign in</Typography>
                    <Avatar className={ classes.avatar } />
                </div>
            </Toolbar>
        )
    };

    return (
        <AppBar className={ classes.root }>
               { displayDesktop() }
        </AppBar>
    );
}

const useStyle = makeStyles((theme) => ({
    root: {
        top: 0,
        backgroundColor: '#fff',
        zIndex: 99,
        position: 'sticky',
        width: '100vw ',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    logo: {
        height: '50px',
        margin: theme.spacing(1,0,0,2),
        objectFit: 'contain'
    },

    input: {
        fontSize: '1.2rem',
        padding: theme.spacing(1,5,1,5 ),
        '&::placeholder': {
            opacity: 1,
            color: 'black',
        }
    }, 
    search: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: '999px',
        minWidth: '300px',
        width: '50%',
        height: '40px',
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        border: '1px solid lightgray',
    },
    right: {
        display: 'flex',
        color: '#333',
        alignItems: 'center',
        marginLeft: theme.spacing(2),
        width: '50%',
    },
    avatar: {
        marginLeft: theme.spacing(2),
    }
}));  

