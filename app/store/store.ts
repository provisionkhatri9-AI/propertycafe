import { configureStore } from "@reduxjs/toolkit";
import callRequestReducer from "../store/slices/callbackandschedyle"
import cookieReducer from "../store/slices/cookie"

export const store = configureStore({
    reducer:{
        callRequest : callRequestReducer,
        cookie: cookieReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch