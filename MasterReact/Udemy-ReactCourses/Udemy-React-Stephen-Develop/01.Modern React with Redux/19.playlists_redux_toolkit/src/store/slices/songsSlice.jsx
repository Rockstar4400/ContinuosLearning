import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../../../../19.playlists_redux_toolkit/src/store/actions";

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action){
            state.push(action.payload);
        },
        removeSong(state, action){
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    },
    extraReducers(builder){
        builder.addCase(reset,() =>{
            return [];
        });
    }
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;