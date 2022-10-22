import React, { useState } from 'react';
import { makeStyles, Typography, Button, Input, TextField } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import hotels, { bookings } from '../InitialData';
import { BookingInterface } from './Booking';
import { DatePicker2 } from './DatePicker2';

export const BookingForm = (props: {
    blockedDates?: Date[][];
    roomId: number;
    hotelId: number;
    onClose: () => void;
}) => {
    const classes = useStyle();
    const { roomId, hotelId } = useParams();
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ startDate, setStartDate ] = useState(new Date());
    const [ endDate, setEndDate ] = useState(new Date());
    const [ description, setDescription ] = useState('');

    const bookings = JSON.parse(localStorage.getItem('bookings')?? '[]') as BookingInterface[];

    const handleSaveBooking = () => {
        console.log('saving booking');
        bookings.push({
            id: bookings.length + 1,
            name,
            email,
            phone,
            startDate: startDate.toISOString().split('T')[0],
            endDate: endDate.toISOString().split('T')[0],
            description,
            roomId: Number(roomId),
            hotelId: Number(hotelId),
            price: 100,
            currency: 'USD',
            paymentMethod: 'cash',
            guests: 1,
        });
        localStorage.setItem('bookings', JSON.stringify(bookings));
        props.onClose();
    };
    
    return (
        <>
            <div className={classes.root}>
                <div className={classes.form}>
                    <div className={classes.input}>
                        <Typography variant='h6' color='textPrimary'>Name</Typography>
                        <Input onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className={classes.input}>
                        <Typography variant='h6' color='textPrimary'>Email</Typography>
                        <Input onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className={classes.input}>
                        <Typography variant='h6' color='textPrimary'>Phone</Typography>
                        <Input onChange={(e)=> setPhone(e.target.value)}/>
                    </div>
                    <div className={classes.input}>
                        <Typography variant='h6' color='textPrimary'>Description</Typography>
                        <TextField multiline rows={4} onChange={(e)=> setDescription(e.target.value)}/>
                    </div>
                    <DatePicker2 
                        blockedDates={props.blockedDates} 
                        setCheckInDate={setStartDate} 
                        setCheckOutDate={setEndDate}
                    />
                    <div className={classes.inputSection}>
                        <Button variant='contained' onClick={handleSaveBooking}>Save</Button>
                        <Button variant='contained' onClick={props.onClose}>Close</Button>
                    </div>
                </div>
                
            </div>

        </>
    )

}

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '40%',
        width: '40%',
        '& button': {
            marginTop: theme.spacing(2),
            height: '40px',
            width: '200px',
        }
    },
    form: {
        marginTop: theme.spacing(2),
        border: '1px solid black',
        borderRadius: '5px',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'right',
    },
    input: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(2),
        fontSize: '1.2rem',
    },
    inputSection: {
        flexDirection: 'row',
        display: 'flex',
        backgroundColor: '#fff',
        color: 'rgba(255, 103, 31, 0.4)',
        "& button": {
            margin: theme.spacing(2),
        },
        "& button:hover": {
            backgroundColor: 'rgba(255, 103, 31, 0.4)',
            color: '#fff',
        },
    }
}));