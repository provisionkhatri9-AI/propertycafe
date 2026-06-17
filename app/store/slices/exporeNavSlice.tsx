import { createSlice,PayloadAction } from "@reduxjs/toolkit";


const exploreNacSlice = createSlice({
    name : "exploreNav",
    initialState:{
        selected: "New Listing"
    },
    reducers:{
        setSelected:(state,action:PayloadAction<string>)=>{
            state.selected = action.payload
        }

    }
})


export const {setSelected} = exploreNacSlice.actions
export default exploreNacSlice.reducer