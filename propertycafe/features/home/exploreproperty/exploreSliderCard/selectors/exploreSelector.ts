import { RootState } from "@/store/store"
import { Catagories, ExploreDataType } from "@/type/ExploreCardTypes"

export const selectedCatagory = (state:RootState) => state.exploreNav.selected

export const exploreData = (state:RootState) =>{
         const selected = state.exploreNav.selected
         const {newListing,trending,land,newprojects} = state.exploreDataType
    

        const dataMapExplore : Record<Catagories, ExploreDataType[]>  = {
                "New Listing" : newListing,
                "Trending" : trending,
                "Land" : land,
                "New Projects" : newprojects,
                "Bank Properties" : [],
                "Price Reduction" : [],
                "Investment Opportunities" : []
            }
        
            return dataMapExplore[selected]
    }