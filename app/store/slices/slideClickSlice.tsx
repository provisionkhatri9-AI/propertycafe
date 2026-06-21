import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type slideKey = "feature" | "recommended" | "similar"
type slideState ={
    featureSlicing : Record<slideKey,number>
    exploreSlided :number
}

const initialState: slideState ={
        featureSlicing:{
            feature : 0,
            recommended :0,
            similar:0,
        },
        exploreSlided:0,
        
    }

const slideSlice = createSlice({
    name : "slideOptions",
    initialState
    ,
    reducers:{
        slideLeftFea : (state,action:PayloadAction<slideKey>)=>{
            state.featureSlicing[action.payload] -= 1
        },

        slideRightFea : (state,action:PayloadAction<slideKey>) =>{
            state.featureSlicing[action.payload] += 1
        },

        slideLeftExp : (state)=>{
            state.exploreSlided -= 1
        },

        slideRightExp : (state) =>{
            state.exploreSlided += 1
        },
        
    }
})

export const {slideLeftFea,slideRightFea, slideLeftExp, slideRightExp} = slideSlice.actions

export default slideSlice.reducer