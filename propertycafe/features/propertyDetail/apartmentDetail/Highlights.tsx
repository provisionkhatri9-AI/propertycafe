import { useMediaQuery } from "react-responsive"
import type { Property } from "@/type/DetailPageType"

type Highlight = {
    highlight: Property["highlights"]
}
export default function Highlight({
    highlight
} : Highlight){

            const highlightItems = [
        {
            value: highlight.totalArea,
            label: "Total Area",
        },
        {
            value: highlight.builtArea,
            label: "Build Up Area",
        },
        {
            value: highlight.roadType,
            label: "Road Type",
        },
        {
            value: highlight.propertyId,
            label: "Property ID",
        },
        {
            value: highlight.propertyFace,
            label: "Property Face",
        },
        {
            value: highlight.roadAccess,
            label: "Road Access",
        },
        ];

    const isMobile = useMediaQuery({maxWidth:767})

    return(
        <div className={`mt-[-10px] ${isMobile ? "bg-[#F4F8FF] p-2 rounded-xl" : ""} flex flex-col gap-6`}>
            <div >
                <p className="font-semibold text-[clamp(1.0rem,4vw,1.1rem)] leading-[140%]">Highlights</p>
            </div>

            <div className="grid grid-cols-3 gap-y-6 text-[clamp(0.8rem,4vw,1rem)]  whitespace-nowrap">
                {
                    highlightItems.map((items,id)=>(
                        <div key={id} className="min-w-[80px] w-full">
                            <p className=" leading-[140%] text-[#4B4B4B] ">{items.value}</p>
                            <p className="text-[clamp(0.8rem,4vw,0.9rem)] leading-[140%] text-[#9D98A0]">{items.label}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}