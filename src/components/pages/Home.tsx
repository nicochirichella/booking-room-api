import { useState } from 'react';
import { makeStyles, CssBaseline, Button, Grid } from '@material-ui/core';
import { Banner } from '../Banner';
import { RoomCard } from '../RoomCard';
import { DatePicker } from '../DatePicker';
import hotels from '../../InitialData';
import { Link } from 'react-router-dom';

export const Home = () => {
    const classes = useStyle();
    const [ showDates, setShowDates ] = useState(false);

    return (
        <>
            <CssBaseline/>
            <div className={ classes.root}>
               <div className={ classes.dates}>
                    <Button onClick={() => setShowDates(!showDates)}>{showDates? 'Hide' : 'Search Dates'}</Button>
               </div>
                {
                        showDates && <DatePicker/>
                }
               <Banner/>
               <Grid container className={ classes.section} spacing={3}>
                    {
                            
                        hotels.map((item) => (
                            <Grid item sm={6} md={4} lg={3 }>
                                <Link to={`/hotel/${item.id}`}>
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

