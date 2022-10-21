// create component footer 

import React from 'react';
import { makeStyles, Typography, Container } from '@material-ui/core';

export const Footer = () => {
    const classes = useStyle();

    return (
        <>
            <footer className={ classes.root}>
                <Container>
                    <Typography variant='subtitle1' gutterBottom>© 2022 - Copyright by @nchiri </Typography>
                    <Typography variant='subtitle2' gutterBottom>Privacy · Terms · Sitemap </Typography>
                </Container>
            </footer>
        </>
    );
}

const useStyle = makeStyles((theme) => ({
    root: {
        borderTop: '1px solid #ccc',
        textAlign: 'center',
        fontStyle: 'italic',
        marginTop: theme.spacing(2),
        background: 'whitesmoke',
    }
}));