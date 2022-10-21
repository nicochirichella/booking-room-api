// create Banner component

import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import background_immage from '../images/hotelBanner.jpg';

export const Banner = () => {
    const classes = useStyle();

    return (
        <>
            <div className={ classes.root}>
                <div className={ classes.info}>
                    <Typography variant="h3" component="h1">Find Your Perfect Hotel</Typography>
                    <Button variant='contained'> Check our hostels </Button>
                </div>
            </div>
        </>
    );
}

const useStyle = makeStyles((theme) => ({
    root: {
        height: '50vh',
        position: 'relative',
        backgroundImage: `url(${background_immage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    info: {
        backgroundColor: '#000',
        color: '#fff',
        width: '350px',
        padding: theme.spacing(3),
        "& button": {
            marginTop: theme.spacing(4),
            backgroundColor: 'rgba(255, 103, 31)',
            color: '#fff',
            fontsize: '1.2rem',
            fontweight: '600',
            textTransform: 'inherit',
        },
        "& button:hover": {
            backgroundColor: '#fff',
            color: 'rgba(255, 103, 31)',
        }
    }
}));