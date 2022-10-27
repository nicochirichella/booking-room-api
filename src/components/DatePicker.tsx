// Create Datepicker component

import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, RangeKeyDict, Range } from 'react-date-range';
import { useNavigate } from 'react-router-dom'; 
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { setCheckinDate, setCheckoutDate, selectSearchFilters } from '../features/searchFilters/searchFiltersSlice';


export const DatePicker = (props: {
    blockedDates?: Date[][];
}) => {
    const classes = useStyle();
    // const history = useHistory();
    const dispatch = useAppDispatch();
    const searchFilters = useAppSelector(selectSearchFilters); 

    const navigate = useNavigate();

    const selectionRange = {
        startDate: new Date(searchFilters.checkinDate),
        endDate: new Date(searchFilters.checkoutDate),
        key: 'selection',
        disabled: false,
        color: 'blue'
    }

    const handleSelect = (value: RangeKeyDict) => {
        if (value.selection?.startDate) {
            dispatch(setCheckinDate(value.selection.startDate.getTime()));
        }
        if (value.selection?.endDate) dispatch(setCheckoutDate(value.selection.endDate.getTime()));
    }

    return (
        <>
            <div className={classes.root}>
                <DateRangePicker ranges={[selectionRange]} 
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

