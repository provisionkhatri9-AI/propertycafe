import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";



type InitialStateType = {
    setSelectedId : number;
   

}

const initialStateArea : InitialStateType = {
    setSelectedId : 0,
}

const annaSlice = createSlice({
    name : "aanaSelectior",
    initialState: initialStateArea,
    reducers:{
        setSelectedId(state, action:PayloadAction<number>){
            state.setSelectedId = action.payload;
        }
    }
}
)

export const {setSelectedId} = annaSlice.actions
export default annaSlice.reducer