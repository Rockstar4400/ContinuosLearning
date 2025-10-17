import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../../../../19.playlists_redux_toolkit/src/store/actions";

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action){
            state.push(action.payload)
        },
        removeMovie(state, action){
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        reset() {
            return [];
        }
    },
    extraReducers(builder){
        builder.addCase(reset, ( ) => {
            return [];
        })
    }
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
