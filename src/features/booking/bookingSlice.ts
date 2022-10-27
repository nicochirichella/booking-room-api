import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { BookingInterface } from '../../types';
export interface BookingState {
    bookings: BookingInterface[];
    selectedBooking: BookingInterface | null;
}

const initialState: BookingState = {
    bookings: [],
    selectedBooking: null,
};

export const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        // set the selected booking
        setSelectedBooking: (state, action) => {
            state.selectedBooking = action.payload;
        },
        // update the selected booking
        updateSelectedBooking: (state, action) => {
            state.selectedBooking = action.payload;
        },
        // delete the selected booking
        deleteSelectedBooking: (state) => {
            state.selectedBooking = null;
        },
        setDbValues: (state, action) => {
            state.bookings = action.payload;
        },
        addBooking: (state, action) => {
            state.bookings.push(action.payload);
        }
    }
});

export const { setSelectedBooking, updateSelectedBooking, deleteSelectedBooking, addBooking, setDbValues } = bookingSlice.actions;

export const selectBookings = (state: RootState) => state.booking.bookings;

export const selectSelectedBooking = (state: RootState) => state.booking.selectedBooking;

export default bookingSlice.reducer;

