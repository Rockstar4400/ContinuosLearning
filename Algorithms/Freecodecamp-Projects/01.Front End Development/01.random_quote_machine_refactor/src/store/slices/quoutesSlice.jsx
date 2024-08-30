import { createSlice, nanoid } from "@reduxjs/toolkit";

const color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
const color2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

const divStyles = {
  background: `linear-gradient(to right, ${color1}, ${color2})`,
  FontFace: "Satisfy",
};

const quotesSlice = createSlice ({
    name: 'quotes',
    initialState: [],
    reducers: {
        loadQuotes(state, action){
            state.push({
                id: nanoid(),
                data: action.payload,
                back: (document.body.style.background = divStyles.background),
                font: (document.body.style.fontFamily = divStyles.FontFace),
                house: null
            });
        }
    }
});

export const { loadQuotes } = quotesSlice.actions;
export const quoteReducer = quotesSlice.reducer;