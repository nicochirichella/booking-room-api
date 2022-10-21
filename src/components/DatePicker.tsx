// Create Datepicker component

import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useNavigate } from 'react-router-dom'; 

export const DatePicker = (props: {
    blockedDates?: Date[][];
}) => {
    const classes = useStyle();
    // const history = useHistory();
    const navigate = useNavigate();
    const today = new Date();
    const tomorrow = new Date().setDate(today.getDate() + 1);

    const addDays = (date: Date, days: number) => {
        const result = new Date();
        result.setDate(date.getDate() + days);
        return result;
    };

    // const blockedRanges = props.blockedDates?.map((blockedDate) => {
    //     return {
    //         startDate: blockedDate[0],
    //         endDate: blockedDate[1],
    //         key: 'selection',
    //         disabled: true,
    //         color: 'red'
    //     };
    // });

    const range1= {
        startDate: new Date('2021-10-05'),
        endDate: addDays(new Date('2021-10-05'), 2),
        key: 'selection',
        disabled: true,
        color: 'red'
    }

    const range2 = {
        startDate: new Date('2021-10-15'),
        endDate: addDays(new Date('2021-10-15'), 10),
        key: 'selection',
        disabled: true,
        color: 'green'
    }

    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
        disabled: false,
        color: 'blue'
    }

    const handleSelect = () => {
        console.log('handleSelect');
    }

    return (
        <>
            <div className={classes.root}>
                <DateRangePicker ranges={[selectionRange]} 
                disabledDates={[new Date('2021-10-05'), new Date('2021-10-15')]}
                onChange={handleSelect} />
                <div className={classes.inputSection}>
                <Button 
                    onClick={() => navigate("./search")}
                > Search Rooms </Button>
                </div>
            </div>
        </> 
    );
}

const useStyle = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        top: '13vh',
        left: '30vw',
        zIndex: 50,
     },
    inputSection: {
        flexDirection: 'column',
        display: 'flex',
        backgroundColor: '#fff',
        "& button:hover": {
            backgroundColor: 'rgba(255, 103, 31, 0.4)',
            color: '#fff',
        },
    }

}));

