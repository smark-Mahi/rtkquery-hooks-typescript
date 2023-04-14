import {configureStore} from '@reduxjs/toolkit'
import {apiiSlice} from './apiiSlice'
export const store=configureStore({
    reducer:{
        [apiiSlice.reducerPath]:apiiSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(apiiSlice.middleware),
});