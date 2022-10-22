import { makeStyles, Typography, Grid } from '@material-ui/core';
import { useParams, Link } from 'react-router-dom';
import { BookingInterface } from '../Booking';
import { RoomCard } from '../RoomCard';
import { rooms } from '../../InitialData';

interface SearchFilters {
    startDate: string;
    endDate: string;
    guests?: number;
    price?: number;
}

export const SearchPage = () => {
    const classes = useStyle();
    const { hotelId } = useParams();

    const betweenDates = (startDate: string, endDate: string, date: string) => {
        return new Date(date) >= new Date(startDate) && new Date(date) <= new Date(endDate);
    };

    const bookingColapses = (booking: BookingInterface, filters: SearchFilters) => {
        const result = betweenDates(booking.startDate, booking.endDate, filters.startDate) 
            || betweenDates(booking.startDate, booking.endDate, filters.endDate)
            || betweenDates(filters.startDate, filters.endDate, booking.startDate)
            || betweenDates(filters.startDate, filters.endDate, booking.endDate);
        return result
    };

    const bookings = JSON.parse(localStorage.getItem('bookings')?? '[]') as BookingInterface[];
    const searchFilters = JSON.parse(localStorage.getItem('searchFilters')?? '{}') as SearchFilters;
    const bookedRooms: BookingInterface[] = bookings.filter((booking: BookingInterface) => bookingColapses(booking, searchFilters));
   
    let hotelRooms = [];
    if (hotelId) {
        hotelRooms = rooms.filter((room) => !bookedRooms.find(booking => booking.roomId === room.id) && room.hotelId === Number(hotelId));
    } else {
        hotelRooms = rooms.filter((room) => !bookedRooms.find(booking => booking.roomId === room.id));
    }
    
    return (
        <>
            <div className={ classes.root}>
                <Typography variant='h5' color='textPrimary'>
                    Available rooms
                </Typography>
                <Grid container className={ classes.section} spacing={3}>
                        {
                            hotelRooms.map((item) => (
                                <Grid item sm={6} md={4} lg={3 }>
                                    <Link to={`/hotel/${hotelId}/room/${item.id}`}>
                                    <RoomCard 
                                        key={item.id} 
                                        image={item.src} 
                                        title={item.title}
                                        description={item.description}
                                    />
                                    </Link>
                                </Grid>
                            ))
                        }
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
}));