import { featureSectionData } from "@/data/featureCardData";
import { recommendedData } from "@/data/recommendedCardData";
import { similarData } from "@/data/similarData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        featureSectionData,
        recommendedData,
        similarData
}

const boxTypeSlice = createSlice({
    name : "sliderBoxTypeSlice",
    initialState,
    reducers :{}

})

export default boxTypeSlice.reducer