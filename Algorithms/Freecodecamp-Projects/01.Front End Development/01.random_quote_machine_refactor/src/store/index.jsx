import { configureStore } from '@reduxjs/toolkit';
import { quoteReducer, setProps, editProps } from './slices/quoutesSlice';

const store = configureStore({
    reducer: {
        quotes: quoteReducer
    }
});

export { store, setProps, editProps };
