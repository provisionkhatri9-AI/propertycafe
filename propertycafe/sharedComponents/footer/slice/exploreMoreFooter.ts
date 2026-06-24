import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface exploreFooter {
    propertyNav : string;
    location : string

}

const initialState : exploreFooter ={
    propertyNav : "Buy",
    location : "Kathmandu"
}

const exploreMoreFooter = createSlice({
    
    name : "exploreMore",
    initialState,
    reducers:{
        propertySelected: (state, action:PayloadAction<string>)=>{
                state.propertyNav = action.payload
        },
        locationSelected : (state,action:PayloadAction<string> )=>{
            state.location = action.payload
        }
    }


})

export const {locationSelected, propertySelected } = exploreMoreFooter.actions
export default exploreMoreFooter.reducer