import { memo } from "react"
import Image from "next/image"

import type { ExploreDataType } from "@/type/ExploreCardTypes"

type ExploreType ={
    explore: ExploreDataType[]
}


 function RealCard({
    explore  
} : ExploreType){
     
    return(
        <div className="flex gap-5 ">
            {
                explore.map((items,id)=>(
                    <div key={id} className="  rounded-[12px] min-w-[270px]  overflow-hidden group hover:scale-101 transition-all duration-300 cursor-pointer">
                            <div className="relative  ">
                            
                                <Image src={items.image} alt="hekko" width={333} height={250} className="w-[333px] h-[250px] "  ></Image>
        
                                <div className="absolute bg-black/20 group-hover:bg-black/30 transition-all duration-300 h-full w-full inset-0  z-10"></div>
                            
        
                            <div className="flex w-[90%] justify-between py-3 px-2 absolute z-20 bottom-4 bg-white rounded-xl left-1/2 -translate-x-1/2 group-hover:-translate-y-[2px] transition-transform duration-300">
                                <div className="flex flex-col">
                                    <p className={`leading-[140%] text-[15px] font-medium`}>{items.title}</p>
                                    <p className={`leading-[140%] text-[12px]  text-[#787D9C]`}>{items.location}</p>
                                </div>
        
                                <div className={`bg-[#F0EAF4] flex items-center justify-center rounded-full border-[0.5px] border-[#D1BFDE] w-[clamp(40px,10vw,30px)] `}>
                                    <Image src="/updiagarrow1.png" alt="ypiag" width={4} height={4} className="h-4 w-3" ></Image>
                                </div>
                            </div>
        
                            <div className="absolute inset-0 top-5 left-5 z-20">
                                <div className="bg-[#6A7FDB] px-[12px] py-[4px] w-fit rounded-[8px]">
                                    <p className="text-[12px] text-white">{items.category}</p>
                                </div>
        
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        
    )
}

export default memo(RealCard)