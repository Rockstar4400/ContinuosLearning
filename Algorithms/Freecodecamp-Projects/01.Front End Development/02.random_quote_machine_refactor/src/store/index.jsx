import { configureStore } from '@reduxjs/toolkit';
import { quouteReducer } from './slices/quoteSlice';

const store = configureStore({
    reducer: {
        quotes: quouteReducer
    }
});

export { store }