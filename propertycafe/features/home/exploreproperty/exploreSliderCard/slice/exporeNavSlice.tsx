import { Catagories } from "@/type/ExploreCardTypes";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type selectedType = {
    selected : Catagories
}

const initialState : selectedType ={
        selected: "New Listing"
    }

const exploreNacSlice = createSlice({
    name : "exploreNav",
    initialState,
    reducers:{
        setSelected:(state,action:PayloadAction<Catagories>)=>{
            state.selected = action.payload
        }

    }
})


export const {setSelected} = exploreNacSlice.actions
export default exploreNacSlice.reducer