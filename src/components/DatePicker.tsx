// Create Datepicker component

import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, RangeKeyDict, Range } from 'react-date-range';
import { useNavigate } from 'react-router-dom'; 

export const DatePicker = (props: {
    blockedDates?: Date[][];
}) => {
    const classes = useStyle();
    // const history = useHistory();
    const navigate = useNavigate();
    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
        disabled: false,
        color: 'blue'
    }

    const handleSelect = (value: RangeKeyDict) => {
        localStorage.setItem('searchFilters', JSON.stringify({
            startDate: value['selection'].startDate?.toISOString().split('T')[0],
            endDate: value['selection'].endDate?.toISOString().split('T')[0]
        }));
    }

    return (
        <>
            <div className={classes.root}>
                <DateRangePicker ranges={[selectionRange]} 
                disabledDates={[new Date('2021-10-05'), new Date('2021-10-15')]}
                onChange={(value) => handleSelect(value)} />
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

