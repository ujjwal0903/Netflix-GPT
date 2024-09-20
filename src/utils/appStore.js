import { configureStore } from "@reduxjs/toolkit";
import useReducer from './userSlice.js';
import moviesReducer from './moviesSlice.js'
import gptReducer from './gptSlice'
import configReducer from './configSlice.js'

const appStore = configureStore({
    reducer: {
        user: useReducer,
        movies : moviesReducer,
        gpt: gptReducer,
        config: configReducer,
    },
});

export default appStore; 