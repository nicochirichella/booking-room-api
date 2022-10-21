// create Hotel Card Component

import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

export const HotelCard = (props: {
    image: string,
    title: string,
    description: string,
}) => {
    const classes = useStyle();

    return (
        <>
            <div className={ classes.root}>
                <figure className={ classes.imageWrapper}>
                    <img className={ classes.media} src={props.image} alt={props.title} />
                 </figure>
                 <Typography variant='h5' color='textPrimary'>{props.title}</Typography>
                 <Typography variant='h6' color='textSecondary'>{props.description}</Typography>

            </div>
        </>
    );
}

const useStyle = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(4, 0, 2, 0),
        [theme.breakpoints.down('xs')]: {
                "& h6": {
                    wordWrap: 'break-word',
                }
        }
    },
    imageWrapper: { 
        overflow: 'hidden',
    },
    media: { 
        height: '400px',
        width: '600px',
        objectFit: 'cover',
        transform: 'scale(1.1)',
        WebkitTransform: 'scale(1.1)',
        WebkitTransition: 'transform 0.3s ease-in-out',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1)',
            WebkitTransform: 'scale(1)',
        }
    }

}));

