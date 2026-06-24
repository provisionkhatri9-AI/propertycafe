import { RootState } from "@/store/store";

export const selectPropertyNav = (state : RootState) => (
    state.exploreMore.propertyNav
)
export const selectLocation = (state : RootState)=>(
    state.exploreMore.location
)

