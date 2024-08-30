import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    back: null, 
    quotes: null, 
    font: null,
    house: null
 };

export const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
        orderQuoteAsc(state){
            state.quotes.sort((a, b) => {
                let fa = a.house.toLowerCase(),
                    fb = b.house.toLowerCase();
            
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            });
        },
        orderQuoteDesc(state){
            state.quotes.sort((a, b) => {
                let fa = a.house.toLowerCase(),
                    fb = b.house.toLowerCase();
            
                if (fa > fb) {
                    return -1;
                }
                if (fa < fb) {
                    return 1;
                }
                return 0;
            });
        }
    }
});


 export const { orderQuoteAsc, orderQuoteDesc } = quoteSlice.actions;
 export default quoteSlice.reducer;