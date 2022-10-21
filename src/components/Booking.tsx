// crete booking component

import React from 'react';
import { makeStyles, Typography, Button, Grid, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import mockData from '../mockData';

export const Booking = () => {
    const classes = useStyle();
    const { roomId, hotelId } = useParams();
    const hotel = mockData[Number(hotelId)];
    const room = hotel.rooms[Number(roomId)];

    return (
        <>
            <div className={ classes.root}>
                <Typography variant='h4' color='textPrimary'>Booking Page</Typography>
                <Typography variant='h5' color='textPrimary'>Room ID: {roomId}</Typography>
                <Typography variant='h5' color='textPrimary'>Hotel ID: {hotelId}
                </Typography>
                <Grid container className={ classes.section} spacing={3}>
                    <Grid item sm={6} md={4} lg={3 }>
                        <FormControl className={ classes.formControl}>
                            <InputLabel id='demo-simple-select-label'>Adults</InputLabel>
                            <Select
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'
                                value={10}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <FormHelperText>Some important helper text</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item sm={6} md={4} lg={3 }>
                        <FormControl className={ classes.formControl}>
                            <InputLabel id='demo-simple-select-label'>Children</InputLabel>
                            <Select
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'
                                value={10}
                            >   
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <FormHelperText>Some important helper text</FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
        </>
    );

}

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(2),
    },
    section: {
        marginTop: theme.spacing(2),
    },
    formControl: {
        minWidth: 120,
    },
}));
