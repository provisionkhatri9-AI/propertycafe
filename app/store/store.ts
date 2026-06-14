import { configureStore } from "@reduxjs/toolkit";
import callRequestReducer from "../store/slices/callbackandschedyle"

export const store = configureStore({
    reducer:{
        callRequest : callRequestReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch