import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from '../components/ContainerSlice';


export default configureStore({
    reducer: {
        orderQuote: quoteReducer
    }
});
