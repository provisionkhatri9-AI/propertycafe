import Image from "next/image"
import { useMediaQuery } from "react-responsive"
import { useSelector } from "react-redux";
import type { Property } from "@/type/DetailPageType";

type TypeAndPricing={
    typeAndPricing : Property["typeAndPricing"]
}

export default function TypeAndPricing({
    typeAndPricing
}: TypeAndPricing){
    

    
    const isMobile = useMediaQuery({maxWidth: 1000})
    const isWidth495 = useMediaQuery({maxWidth:495})
    const isWidth548 = useMediaQuery({maxWidth:548})
    const isWidth444 = useMediaQuery({maxWidth:444})

    return(
        <div className={`flex flex-col  w-full  ${isMobile ? "gap-2" : "gap-6"}`}>
            <div className="px-2 w-fit rounded-xl py-1 bg-[#E7EDFF]">
                                <p className="text-[#5379FF] text-[14px] leading-[140%]">{typeAndPricing.type}</p>
                            </div>
            
                            <div className={`flex ${isWidth548? "justify-start" : "justify-between"} flex-wrap whitespace-nowrap max-w-[600px] ${isMobile? "gap-7": "gap-20"}`}>
                                <div className={` border-r-1 w-fit ${isWidth444? "pr-4": isWidth495 ? "pr-8" : "pr-15"} border-[#F0EAF4] `}>
                                    <div className="flex items-center  self-start   gap-1">
                                        <p className="font-semibold text-[clamp(0.9rem,4vw,1rem)] leading-[140%]">{typeAndPricing.area}</p>
                                        <Image src="/downarrow.png" alt="hello" width={0} height={0} className="w-[11px] h-[11px]"></Image>
                                    </div>
                                    <p className="text-[#9D98A0] leading-[140%] text-[clamp(0.7rem,4vw,0.9rem)]">Area</p>
                                </div>
            
                                <div className={`border-r-1 w-fit ${isWidth444? "pr-4": isWidth495 ? "pr-8" : "pr-15"}   border-[#F0EAF4]`}>
                                    <div className="flex items-center  gap-1">
                                        <p className="font-semibold text-[clamp(0.9rem,4vw,1rem)] leading-[140%]">{typeAndPricing.averageRate}</p>
                                        <Image src="/downarrow.png" alt="hello" width={0} height={0} className="w-[11px] h-[11px]"></Image>
                                    </div>
                                    <p className="text-[#9D98A0] leading-[140%] text-[clamp(0.7rem,4vw,0.9rem)]">Average Rate</p>
                                </div>
            
                                <div className="w-fit   border-[#F0EAF4]">
                                    <div className="flex items-center gap-1">
                                        <p className="font-semibold text-[clamp(0.9rem,4vw,1rem)] leading-[140%]">Ready To Move</p>
                                        <Image src="/downarrow.png" alt="hello" width={0} height={0} className="w-[11px] h-[11px]"></Image>
                                    </div>
                                    <p className="text-[#9D98A0] leading-[140%] text-[clamp(0.7rem,4vw,0.9rem)]">Posession Status</p>
                                </div>
                            </div>
        </div>
    )
}