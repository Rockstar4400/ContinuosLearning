import { configureStore } from '@reduxjs/toolkit';
import { quoteReducer, setProps, editProps } from './reducers/quotesReducers';

const store = configureStore({
    reducer: {
        quotes: quoteReducer
    }
});

export { store, setProps, editProps };
