"use client"
import { useRef } from "react"
import ArrowComp from "@/sharedComponents/arrowComp";

interface RoomSizeType{
    type: string;
    size:string
}

interface RoomAndSizeType {
    property: RoomSizeType[]
}

export default function RoomAndSize({
    property
} :RoomAndSizeType){

    const ref = useRef<HTMLDivElement>(null)

    const scrollLeft= ()=>{
        if(ref.current){
            ref.current.scrollBy({
                left : -ref.current.clientWidth,
                behavior:"smooth"
            })
        }
    }

    const scrollRight = ()=>{
        if(ref.current){
            ref.current.scrollBy({
                left: ref.current.clientWidth,
                behavior:"smooth"

            })
        }
    }

    return(

       <div className="relative">
             <div ref={ref} className=" max-w-[600px] relative min-w-[200px] py-1 px-2 flex gap-2 overflow-hidden">
            {
                    property.map((items,id)=>(
                    <div key={id} className="flex flex-col  gap-2 items-center border-[1px] border-[#F0EAF4] whitespace-nowrap radius-xl w-fit px-3">
                        <p className="text-[#4B4B4B] text-[14px] leading-[140%]">{items.type}</p>
                        <p className="text-[#4B4B4B] text-[14px] leading-[140%]">{items.size}</p>
                    </div>
                    ))
                }
        </div>

        <div className="absolute right-[-30px] top-3 z-[100]">
            <ArrowComp direction="right" onClick={scrollRight} type={"roomandsize"}></ArrowComp>
        </div>
        <div className="absolute left-[-40px] top-3 z-[100]">
            <ArrowComp direction="left" onClick={scrollLeft} type={"roomandsize"}></ArrowComp>
        </div>
       </div>

    )
}