import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface exploreFooter {
    property : string;
    location : string

}

const initialState : exploreFooter ={
    property : "Buy",
    location : "Kathmandu"
}

const exploreMoreFooter = createSlice({
    
    name : "exploreMore",
    initialState,
    reducers:{
        propertySelected: (state, action:PayloadAction<string>)=>{
                state.property = action.payload
        },
        locationSelected : (state,action:PayloadAction<string> )=>{
            state.location = action.payload
        }
    }


})

export const {locationSelected, propertySelected } = exploreMoreFooter.actions
export default exploreMoreFooter.reducer