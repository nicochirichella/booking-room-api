import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';
import hotels, { rooms } from '../InitialData';
import { BookingInterface } from '../types';
import { selectBookings } from '../features/booking/bookingSlice';
import { useAppSelector } from '../app/hooks';

export const BookingGrid = () => {
    const classes = useStyle();
    const { roomId, hotelId } = useParams();
    const hotel = hotels.find((item) => item.id === Number(hotelId));
    const room = rooms.find((item) => item.id === Number(roomId));

    // let bookings = localStorage.getItem('bookings') ? JSON.parse(localStorage.getItem('bookings') || '') : [];
    let bookings = useAppSelector(selectBookings);
    
    if (roomId) {
        bookings = bookings.filter((booking: BookingInterface) => booking.roomId === Number(roomId));
    } else {
        bookings = bookings.filter((booking: BookingInterface) => booking.hotelId === Number(hotelId));
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 130 },
        { field: 'hotelName', headerName: 'Hotel', width: 130 },
        { field: 'roomTitle', headerName: 'Room', width: 130 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'startDate', headerName: 'Start Date', width: 100 },
        { field: 'endDate', headerName: 'End Date', width: 100 },
        { field: 'roomDescription', headerName: 'Description', width: 300 },
        { field: 'roomGuests', headerName: 'Guests', width: 70 },
        { field: 'roomPrice', headerName: 'Price', width: 70 },
        { field: 'currency', headerName: 'Currency', width: 70 },
        { field: 'method', headerName: 'Method', width: 130 },
    ];

    const rows = bookings.map((booking: BookingInterface) => {
        const hotel = hotels.find((item) => item.id === booking.hotelId);
        const room = rooms.find((item) => item.id === booking.roomId);
        return {
            id: booking.id,
            hotelName: hotel?.title,
            roomTitle: room?.title,
            name: booking.name,
            email: booking.email,
            startDate: new Date(booking.startDate).toISOString().split('T')[0],
            endDate: new Date(booking.endDate).toISOString().split('T')[0],
            roomDescription: booking.description,
            roomGuests: booking.guests,
            roomPrice: booking.price,
            currency: booking.currency,
            method: booking.paymentMethod,
        }
    });

    return (
        <>
            <div className={ classes.root}>
                <Typography variant='h4' color='textPrimary'>Booking Page</Typography>
                <Typography variant='h5' color='textPrimary'> {hotel?.title}</Typography>
                {
                    room && <Typography variant='h5' color='textPrimary'>{room.title}</Typography>
                }
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
                </div>
            </div>
        </>
    );
};

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(2),
        marginBottom: theme.spacing(10),
    },
    dates: {
        display: 'flex',
        flexDirection: 'column',
        '& button': {
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            color: 'rgba(255, 103, 31, 0.4)',
            padding: theme.spacing(1),
            borderRadius: theme.spacing(1),
            margin: theme.spacing(1),
            '&:hover': {
                backgroundColor: '#fff',
                color: 'rgba(255, 103, 31, 0.8)',
            },
        },
    },
    table: {
        minWidth: 650,
        backgroundColor: 'rgba(255, 103, 31, 0.8)',
        fontSize: '1.2rem',
        border: '1px solid #ccc',
        borderRadius: theme.spacing(1),
    },
}));

