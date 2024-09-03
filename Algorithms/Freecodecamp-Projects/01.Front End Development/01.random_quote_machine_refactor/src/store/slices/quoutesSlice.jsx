import { createSlice } from "@reduxjs/toolkit";

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
        setProps(state, action){
            state.push({
                data: action.payload,
                back: (document.body.style.background = divStyles.background),
                font: (document.body.style.fontFamily = divStyles.FontFace),
            });
        },
        editProps(state, action){
            const { back, font, id } = action.payload;
            const quotes = state.find(q => q.id === id);
            if (quotes){
                quotes.back = back;
                quotes.font = font;
            }
        }
    }
});

export const { setProps, editProps } = quotesSlice.actions;
export const quoteReducer = quotesSlice.reducer;