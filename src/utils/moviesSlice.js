import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {},
    reducers: {
        addNowPlayingMovies : (state, action) =>{
            state.NowPlayingMovies = action.payload;
        },
    },
});

export const {addNowPlayingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;