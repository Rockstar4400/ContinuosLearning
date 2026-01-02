import { createSlice } from "@reduxjs/toolkit";
import { fetchQuotesData } from "./thunk/fetchQuotes";

const color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
const color2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

export const quoteSlice = createSlice({
    name: 'quotes',
    initialState: 
        {
        data: [],
        loading: false,
        background: `linear-gradient(to right, ${color1}, ${color2})`,
        FontFace: "Satisfy"},
        error: null
    ,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchQuotesData.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchQuotesData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchQuotesData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

    }
});

export const quouteReducer = quoteSlice.reducer;
