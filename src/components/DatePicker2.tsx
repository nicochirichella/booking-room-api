// create DatePicker2 component from import { CalendarComponent } from '@syncfusion/ej2-react-calendars';

import React, {useState} from 'react';
import DatePicker, { DateObject } from "react-multi-date-picker"
import { makeStyles, Button } from '@material-ui/core';

export const DatePicker2 = (props: {
    blockedDates?: Date[][];
    setCheckInDate: (date: Date) => void;
    setCheckOutDate: (date: Date) => void;
}) => {
    const classes = useStyle();
    
    const dateBetween = (date: Date, startDate: Date, endDate: Date) => {
        return date >= startDate && date <= endDate;
    };

    const blockedDates = (date: DateObject) => {
        if (props.blockedDates) {
            return props.blockedDates.some((blockedDateRange) => dateBetween(date.toDate(), blockedDateRange[0], blockedDateRange[1]));
        }
        
        return false;
    };

    const highlightBlockedDates = (date: DateObject) => {
        let props: {
            className?: string
        } = {}
        
        if (blockedDates(date)) props.className = "highlight highlight-red"
        return props
    }
   
    const [dates, setDates] = useState(new Date());

    return (
        <>
            <div className={ classes.root}>
                <DatePicker 
                    range
                    value={dates}
                    onChange={(value) => {
                        if (value instanceof Array){
                            if (value[0] instanceof DateObject) props.setCheckInDate(value[0].toDate());
                            if (value[1] instanceof DateObject) props.setCheckOutDate(value[1].toDate());
                        }}
                    }
                    mapDays= {({date}) => highlightBlockedDates(date)}
                />
                
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
}));