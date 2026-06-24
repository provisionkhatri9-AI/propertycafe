import type { Property } from "@/type/DetailPageType"
import { useDispatch,useSelector } from "react-redux"
import { setSelectedIdAana } from "./slices/annaSlice"
import { RootState } from "@/store/store"



type IsMobileLittle = {
    isLittleMobile : boolean
    isMobile: boolean
    priceAndFloor: Property["priceAndFloor"]
}

export default function AanaSelectionBox({
    isLittleMobile,
    isMobile,
    priceAndFloor,
} : IsMobileLittle){

    const dispatch = useDispatch()

    const selectedId = useSelector(
        (state:RootState) => state.aanaSlice.setSelectedId
    )
    return(
        <div className="w-full">
                <p className={`flex text-[14px] w-full mb-3 leading-[140%] ${isMobile ? "justify-between" : ""} `}>Showing all sizes<span className="text-[#787D9C] ">(1 Anna = 342.25 Sq.ft)</span></p>
               
                    {
                        !isLittleMobile&&
                        <div className="border-[0.5px]  flex justify-between  border-[#F0EAF4] p-3 rounded-2xl">
                        {
                            priceAndFloor.map((items,id)=>(
                                
                            <div key={id} onClick={()=>dispatch(setSelectedIdAana(id))} className={`py-2 px-6 w-fit  h-[45px] ${selectedId === id ? "bg-[#F0EAF4] text-[#6A3093]" :""} rounded-xl  flex items-center cursor-pointer justify-center`}>
                                <p className="text-[14px] leading-[140%] ">{items.area}</p>
                            </div>
                            ))
                        }
                        </div>
                    }
            </div>
    )
}