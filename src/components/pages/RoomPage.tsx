import { useState } from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import { useParams, Link } from 'react-router-dom';
import { rooms } from '../../InitialData';
import { BookingForm } from '../BookingForm';
import { BookingInterface } from '../Booking';

export const RoomPage = () => {
    const classes = useStyle();
    const { roomId, hotelId } = useParams();
    const room = rooms.find((item) => item.id === Number(roomId));

    const bookings = JSON.parse(localStorage.getItem('bookings')?? '[]') as BookingInterface[];
    const roomsBookings = bookings.filter((booking: BookingInterface) => booking.roomId === room?.id && booking.hotelId === room?.hotelId);

    const blockedDates: Date[][] = roomsBookings.map((booking: BookingInterface) => {
        const startDate = new Date(booking.startDate);
        const endDate = new Date(booking.endDate);
        const dates: Date[] = [startDate, endDate];
        return dates;
    });
    const [newBooking, setNewBooking] = useState(false);

    return (
        <>
            <div className={classes.root}>
                <Typography variant='h4' color='textPrimary'>{room?.title}</Typography>
                <div className={classes.info}>
                    <img className={classes.media} src={room?.src} alt={room?.title} />
                    <Typography variant='h5' color='textPrimary'>{room?.description}</Typography>
                </div>
                <div className={classes.button}>
                    <Link to={`/booking/hotel/${hotelId}/room/${roomId}`}>
                        <Button variant='contained' color='primary'> Show Bookings </Button>
                    </Link>
                    <Button variant='contained' color='primary' onClick={() => setNewBooking(true)}>New Booking</Button>
                </div>
                {
                    newBooking && (
                        <div>
                            <BookingForm 
                                roomId={Number(roomId)} 
                                hotelId={Number(hotelId)}
                                blockedDates={blockedDates}
                                onClose={() => setNewBooking(false)}
                             />
                        </div>
                    )
                }
                
            </div>
            {/* <DatePicker blockedDates={blockedDates} /> */}
        </>
    );
}

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(2),
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        '& h5': {
            margin: theme.spacing(2),
            position: 'relative',
            top: '50%',
            wordWrap: 'break-word',
        }
    },
    media: { 
        height: '400px',
        width: '600px',
        objectFit: 'cover',
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: theme.spacing(2),
        "& button": {
            height: '50px',
            width: '200px',
            margin: theme.spacing(2),
        },
    }
}));
