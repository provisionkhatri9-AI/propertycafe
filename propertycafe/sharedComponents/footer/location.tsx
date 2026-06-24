import { locationSelected } from "./slice/exploreMoreFooter";
import type { LocationType } from "@/type/ExploreMore"
import { useDispatch } from "react-redux"

type LocationProps = {
    locations : LocationType[];
    selectedLocation:string;
}

export default function Location({
   locations,
   selectedLocation
} : LocationProps){

    const dispatch = useDispatch()
    return(
        <div className="mt-3 flex  gap-4 flex-wrap">
            {
                locations?.map((location,key)=>(
                    <div key={key} className={`px-3 py-2 ${selectedLocation== location.location?" border-[#6A3093] bg-[#F0EAF49C] text-[#6A3093]" : "text-[#BDBDCD] border-[#BDBDCD]"} cursor-pointer w-fit rounded-xl border-1`} onClick={()=>dispatch(locationSelected(location.location))}>
                <p className=" text-[12px]">{location.location}</p>
            </div>
                ))
            }
            
        </div>
    )
}