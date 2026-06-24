import { createSlice } from "@reduxjs/toolkit";

import { newListing } from "@/data/exploreCardData";
import { trending } from "@/data/trending";
import { land } from "@/data/land";
import { newprojects } from "@/data/newProject";
import type { ExploreDataType } from "@/type/ExploreCardTypes";

type ExploreData = {
    newListing : ExploreDataType[],
    trending : ExploreDataType[],
    land: ExploreDataType[],
    newprojects : ExploreDataType[]
}


const initialState : ExploreData = {
    newListing ,
    trending,
    land,
    newprojects
}
const exploreSlice = createSlice({
    name : "exploreDataTypeSlice",
    initialState,
    reducers:{}
})

export default exploreSlice.reducer