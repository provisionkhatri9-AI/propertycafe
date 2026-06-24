import { RootState } from "@/store/store"
import type { SlideKey } from "../slice/slideClickSlice"

export const slide = (type: SlideKey) =>
    (state: RootState) => 
    state.slideOptions.featureSlicing[type]
    
    
    export const selectSliderData= (
        (state:RootState) => state.sliderBoxType
    )