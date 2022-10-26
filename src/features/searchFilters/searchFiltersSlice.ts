import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface SearchFiltersState {
    checkinDate: number;
    checkoutDate: number;
    guests: number;
    price: number; 
}

const initialState: SearchFiltersState = {
    checkinDate: new Date().getTime(),
    checkoutDate: new Date().getTime(),
    guests: 0,
    price: 0,
};

export const searchFiltersSlice = createSlice({
    name: 'searchFilters',
    initialState,
    reducers: {
        setCheckinDate: (state, action) => {
            state.checkinDate = action.payload;
        },
        setCheckoutDate: (state, action) => {
            state.checkoutDate = action.payload;
        }
    }
});

export const { setCheckinDate, setCheckoutDate } = searchFiltersSlice.actions;

export const selectSearchFilters = (state: RootState) => state.searchFilters;

export default searchFiltersSlice.reducer;
         