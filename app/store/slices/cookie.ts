import { createSlice } from "@reduxjs/toolkit";

const cookieSlice = createSlice({
    name : "cookie",
    initialState : {
        showCookie : true
    },
    reducers:{
        hideCookie: (state)=>{
                state.showCookie= false
        },
    },
})

export default cookieSlice.reducer
export const {hideCookie} = cookieSlice.actions