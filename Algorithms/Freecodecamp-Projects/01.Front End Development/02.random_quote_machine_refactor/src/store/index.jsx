import { configureStore } from '@reduxjs/toolkit';
import { quouteReducer } from './slices/quoteSlice';

export const store = configureStore({
    reducer: {
        quotes: quouteReducer
    }
});

export * from './slices/thunk/fetchQuotes';