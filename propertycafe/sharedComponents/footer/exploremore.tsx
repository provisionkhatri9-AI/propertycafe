"use client"
import { useSelector,useDispatch } from "react-redux";
import { exploreData } from "@/data/exploreMoreData";
import { propertySelected } from "./slice/exploreMoreFooter";
import Links from "./links";
import ExploreHousingType from "./exploreHousingType";
import Location from "./location";
import AreaAndHousing from "./areaAndHousing";
import { useExploreMore } from "./hooks/exploreMore";
import { selectPropertyNav,selectLocation } from "./selectors/exploreMoreSelector";


export default function ExploreMore(){

    const dispatch = useDispatch()

    const selectedPropertyNav = useSelector(selectPropertyNav)
    const selectedLocation = useSelector(selectLocation)

    const exploreDataNavType =(exploreData.map((data)=> data.type))

    const {locations,
        uniqueHousingOptions,
        areaAndHousing,
        locationDataoRNull} = useExploreMore(
        selectedPropertyNav,
        selectedLocation,
    )

    return(
        <div className="mb-2 w-full flex flex-col gap-2 ">
            <div>
                <p className="head-textstyle">Explore More Properties</p>
            </div>

            <div className="flex sm:justify-start sm:gap-20 justify-between border-b-1 border-[#F0EAF4]  h-full">
                {
                    exploreDataNavType.map((item,key)=>(
                <div key={key} className="h-[10px] h-fit  flex flex-col items-center cursor-pointer" onClick={()=>dispatch(propertySelected(item))}>
                    <p className={`${selectedPropertyNav ==item ? "text-[#6A3093]" : "text-[#787D9C]"} text-[14px] leading-[140%]`}>{item}</p>
                    {
                        selectedPropertyNav == item&&
                        <div className="h-[3px] mt-[11px] rounded-xl w-[150%] bg-[#6A3093]"></div>
                    }
                </div>
                    ))
                }
                
            </div>

            <Location locations={locations} selectedLocation={selectedLocation}></Location>

            <ExploreHousingType uniqueHousingOptions={uniqueHousingOptions}></ExploreHousingType>

            {
                locationDataoRNull?( 
                <AreaAndHousing areaAndHousing={areaAndHousing}></AreaAndHousing>
                ) : (
                    <div className="h-20 flex flex-col gap-2 items-center justify-center w-full text-[grey]">
                        <p>No Result found for {selectedPropertyNav} in {selectedLocation} </p>
                        <p>Select Location Again</p>
                    </div>
                )
            }

            <Links/>
        </div>
    )
}