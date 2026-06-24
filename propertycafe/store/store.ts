import { configureStore } from "@reduxjs/toolkit";
import callRequestReducer from "@/features/propertyDetail/slices/callbackandschedule"
import cookieReducer from "@/sharedComponents/cookie/slice/cookie"
import slideReducer from "../sharedComponents/slideBox/slice/slideClickSlice"
import exploreNavReducer from "../features/home/exploreproperty/exploreSliderCard/slice/exporeNavSlice"
import exploreMoreReducer from "../sharedComponents/footer/slice/exploreMoreFooter"
import propertyDetailReducer from "@/features/propertyDetail/slices/DetailPageSlice"
import aanaSliceReducer from "@/features/propertyDetail/floorandprice/slices/annaSlice"
import sliderBoxTypeReducer from "../sharedComponents/slideBox/slice/sliderBoxTypeData"
import exploreDataTypeSlice from "../features/home/exploreproperty/exploreSliderCard/slice/exploreDataSlice"

export const store = configureStore({
    reducer:{
        callRequest : callRequestReducer,
        cookie: cookieReducer,
        slideOptions : slideReducer,
        exploreNav: exploreNavReducer,
        exploreMore: exploreMoreReducer,
        detailPage: propertyDetailReducer,
        aanaSlice : aanaSliceReducer,
        sliderBoxType: sliderBoxTypeReducer,
        exploreDataType : exploreDataTypeSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch