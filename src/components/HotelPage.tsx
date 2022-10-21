// create HotelPage component

import { makeStyles, Grid} from '@material-ui/core';
import { RoomCard } from './RoomCard';
import mockData from '../mockData';
import { Link, useParams } from 'react-router-dom';

export const HotelPage = () => {
    const classes = useStyle();
    const { hotelId } = useParams<{ hotelId: string }>();
    const hotel = mockData[Number(hotelId)];

    return (
        <>
            <div className={ classes.root}>
                <h1>{hotel.title}</h1>
                <Grid container className={ classes.section} spacing={3}>
                        {
                                
                            hotel.rooms.map((item, index) => (
                                <Grid item sm={6} md={4} lg={3 }>
                                    <Link to={`/hotel/${hotelId}/room/${index}`}>
                                    <RoomCard 
                                        key={index} 
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
        marginBottom: theme.spacing(10),
    },
    dates: {
        display: 'flex',
        flexDirection: 'column',
        '& button': {
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            color: 'rgba(255, 103, 31, 0.4)',
            textTransform: 'inherit',
            fontSize: '1.2rem',
            fontWeight: 'bold',
        },
        '& button:hover': {
            backgroundColor: 'rgba(255, 103, 31, 0.4)',
            color: '#fff',
        }
    },
    section: {
    }
}));


