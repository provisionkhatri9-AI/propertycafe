import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CallandVisit{
    activemodal : "callback" | "schedule" | null
}

const initialState : CallandVisit = {
    activemodal : null,
} 

const callRequest = createSlice({
    name : "callSlice",
    initialState,
    reducers:{
        openModal:(
            state,
            action : PayloadAction<"callback" | "schedule">
        ) =>{
            state.activemodal = action.payload
        },

        closeModal:(state)=>{
            state.activemodal = null

        }
    }
})

export const {openModal, closeModal} = callRequest.actions
export default callRequest.reducer