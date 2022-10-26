import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import searchFiltersReducer from '../features/searchFilters/searchFiltersSlice';
import userReducer from '../features/user/userSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    searchFilters: searchFiltersReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
