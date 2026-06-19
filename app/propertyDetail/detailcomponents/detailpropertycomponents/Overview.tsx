import { useSelector } from "react-redux"
import { RootState } from "@/app/store/store"

export default function Overview(){

     const property = useSelector(
            (state:RootState) => state.detailPage.properties.find(
                (p) => p.id === state.detailPage.selectedId
            )
        )
    
        if(!property) return <p>error</p>
    return(
        <div className="flex flex-col gap-7">
            <div className="flex gap-3 w-fit ">
            <div className="w-fit px-2 py-1  h-[44px]">
                <div className="flex items-center justify-center bg-gradient-to-r from-[#A044FF] to-[#6A3093] bg-clip-text text-transparent">
                    <p className="text-[16px] leading-[140%]">Overview</p>
                </div>
                <div className="bg-gradient-to-l mt-2 from-[#A044FF] to-[#6A3093] h-1 rounded-xl w-full"></div>
                </div>

                <div className="w-fit px-2 py-1 h-[44px]">
                    <div className="flex items-center justify-center">
                        <p className="text-[16px] leading-[140%] text-[#787D9C]">Aminities</p>
                    </div>
                    
                </div>

                <div className="w-fit px-2 py-1">
                    <div className="flex items-center justify-center">
                        <p className="text-[16px] leading-[140%] text-[#787D9C]">Location</p>
                    </div>
                </div>
    
                
            </div>

            <div>
                <p className="font-semibold text-[18px] leading-[140%] text-[#34373D]">{property.overview.heading}</p>
            </div>

            <div>
                <p className="text-[15px] text-[#787D9C] leading-[140%]">{property.overview.discription}<span className="text-[#F0A300] font-bold text-[15px] leading-[140%] cursor-pointer">...Read More</span></p>
            </div>

            <div>
                <p className="text-[15px] text-[#787D9C] leading-[140%]">{property.overview.quote}</p>
            </div>
        </div>
    )
}