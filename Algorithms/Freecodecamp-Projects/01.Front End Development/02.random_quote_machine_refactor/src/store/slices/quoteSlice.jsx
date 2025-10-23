import { createSlice } from "@reduxjs/toolkit";

const color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
const color2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

const quoteSlice = createSlice({
    name: 'quote',
    initialState: [
        {
        background: `linear-gradient(to right, ${color1}, ${color2})`,
        FontFace: "Satisfy"}
    ],
    reducers: {
        loadQuotes(state, action){
            state.push( { data: action.payload} );
        },
    },
});

export const { loadQuotes } = quoteSlice.actions;
export const quouteReducer = quoteSlice.reducer;
