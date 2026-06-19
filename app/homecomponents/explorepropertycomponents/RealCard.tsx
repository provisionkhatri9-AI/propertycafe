
import Image from "next/image"

import type { Property } from "@/data/exploreCardData"



export default function RealCard({
    title,
    image,
    category,
    location,
    
    
} : Property){
     
    return(
        <div className="  rounded-[12px] min-w-[270px]  overflow-hidden group hover:scale-101 transition-all duration-300 cursor-pointer">
                            <div className="relative  ">
                            
                                <Image src={image} alt="hekko" width={0} height={0} className="w-[333px] h-[250px] "  unoptimized></Image>
        
                                <div className="absolute bg-black/20 group-hover:bg-black/30 transition-all duration-300 h-full w-full inset-0  z-10"></div>
                            
        
                            <div className="flex w-[90%] justify-between py-3 px-2 absolute z-20 bottom-4 bg-white rounded-xl left-1/2 -translate-x-1/2 group-hover:-translate-y-[2px] transition-transform duration-300">
                                <div className="flex flex-col">
                                    <p className={`leading-[140%] text-[15px] font-medium`}>{title}</p>
                                    <p className={`leading-[140%] text-[12px]  text-[#787D9C]`}>{location}</p>
                                </div>
        
                                <div className={`bg-[#F0EAF4] flex items-center justify-center rounded-full border-[0.5px] border-[#D1BFDE] w-[clamp(40px,10vw,30px)] `}>
                                    <img src="/updiagarrow1.png" alt="" className="h-4 w-3" />
                                </div>
                            </div>
        
                            <div className="absolute inset-0 top-5 left-5 z-20">
                                <div className="bg-[#6A7FDB] px-[12px] py-[4px] w-fit rounded-[8px]">
                                    <p className="text-[12px] text-white">{category}</p>
                                </div>
        
                            </div>
                        </div>
                    </div>
        
    )
}