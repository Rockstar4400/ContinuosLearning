import { createSlice } from '@reduxjs/toolkit';

const searchsSlice = createSlice({
    name: 'search',
    initialState: {
        data: []
    },
    reducers: {}
});

export const searchReducer = searchsSlice.reducer;