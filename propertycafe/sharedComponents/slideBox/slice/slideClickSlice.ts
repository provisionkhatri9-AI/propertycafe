import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SlideKey = "feature" | "recommended" | "similar"
type slideState ={
    featureSlicing : Record<SlideKey,number>
    
}

const initialState: slideState ={
        featureSlicing:{
            feature : 0,
            recommended :0,
            similar:0,
        },
      
        
    }

const slideSlice = createSlice({
    name : "slideOptions",
    initialState
    ,
    reducers:{
        slideLeftFea : (state,action:PayloadAction<SlideKey>)=>{
            state.featureSlicing[action.payload] -= 1
        },

        slideRightFea : (state,action:PayloadAction<SlideKey>) =>{
            state.featureSlicing[action.payload] += 1
        },

        
    }
})

export const {slideLeftFea,slideRightFea} = slideSlice.actions

export default slideSlice.reducer