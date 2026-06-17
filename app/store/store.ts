import { configureStore } from "@reduxjs/toolkit";
import callRequestReducer from "../store/slices/callbackandschedule"
import cookieReducer from "../store/slices/cookie"
import slideReducer from "../store/slices/slideClickSlice"
import exploreNavReducer from "../store/slices/exporeNavSlice"
import exploreMoreReducer from "../store/slices/exploreMoreFooter"

export const store = configureStore({
    reducer:{
        callRequest : callRequestReducer,
        cookie: cookieReducer,
        slideOptions : slideReducer,
        exploreNav: exploreNavReducer,
        exploreMore: exploreMoreReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch