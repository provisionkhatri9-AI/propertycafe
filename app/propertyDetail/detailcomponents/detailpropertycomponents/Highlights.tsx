import { useMediaQuery } from "react-responsive"
import { useSelector } from "react-redux"
import { RootState } from "@/app/store/store"

export default function Highlight(){

    const isMobile = useMediaQuery({maxWidth:767})

     const property = useSelector(
        (state:RootState) => state.detailPage.properties.find(
            (p) => p.id === state.detailPage.selectedId
        )
    )

    if(!property) return <p>error</p>
    return(
        <div className={`mt-[-10px] ${isMobile ? "bg-[#F4F8FF] p-2 rounded-xl" : ""} flex flex-col gap-6`}>
            <div >
                <p className="font-semibold text-[clamp(1.0rem,4vw,1.1rem)] leading-[140%]">Highlights</p>
            </div>

            <div className="flex text-[clamp(0.8rem,4vw,1rem)] space-between whitespace-nowrap">
                <div className="min-w-[80px] w-full">
                    <p className=" leading-[140%] text-[#4B4B4B] ">{property.highlights.totalArea}</p>
                    <p className="text-[clamp(0.8rem,4vw,0.9rem)] leading-[140%] text-[#9D98A0]">Total Area</p>
                </div>
                <div className="min-w-[80px] w-full">
                    <p className="leading-[140%] text-[#4B4B4B]">{property.highlights.builtArea}</p>
                    <p className="text-[clamp(0.8rem,4vw,0.9rem)] leading-[140%] text-[#9D98A0]">Build Up Area</p>
                </div>
                <div className="min-w-[80px] w-full">
                    <p className=" leading-[140%] text-[#4B4B4B]">{property.highlights.roadType}</p>
                    <p className="text-[clamp(0.8rem,4vw,0.9rem)] leading-[140%] text-[#9D98A0]">Road Type</p>
                </div>
            </div>
             <div className="flex text-[clamp(0.8rem,4vw,1rem)] space-between  whitespace-nowrap">
                <div className="min-w-[80px] w-full">
                    <p className=" leading-[140%] text-[#4B4B4B]">{property.highlights.propertyId}</p>
                    <p className="text-[clamp(0.8rem,4vw,0.9rem)] leading-[140%] text-[#9D98A0]">Property ID</p>
                </div>
                <div className="min-w-[80px] w-full">
                    <p className=" leading-[140%] text-[#4B4B4B]">{property.highlights.propertyFace}</p>
                    <p className="text-[clamp(0.8rem,4vw,0.9rem)] leading-[140%] text-[#9D98A0]">Property Face</p>
                </div>
                <div className="min-w-[80px] w-full">
                    <p className=" leading-[140%] text-[#4B4B4B]">{property.highlights.roadAccess}</p>
                    <p className="text-[clamp(0.8rem,4vw,0.9rem)] leading-[140%] text-[#9D98A0]">Road Access</p>
                </div>
            </div>
        </div>
    )
}