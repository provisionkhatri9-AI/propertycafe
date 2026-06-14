"use client"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"
export default function FindHomeBanner(){

    const isMobile = useMediaQuery({maxWidth:990})
    return(
     <div className={`flex ${isMobile? "flex-col" : "flex-row"} justify-between`}>
        <div className={`flex flex-col gap-4 ${isMobile? "order-2" : "order-1"}`}>
            <p className="text-[#ED9F4A] text-[16px] leading-[140%] font-semibold">100% verified listings!</p>
            <p className="bg-gradient-to-r from-[#654EA3] to-[#EAAFC8] text-[clamp(1.5rem,4vw,2rem)] leading-[120%] font-bold bg-clip-text text-transparent max-w-[400px] ">The Keys To Your Ideal Home Are Here</p>
            <p className="text-[#787D9C] text-[14px] leading-[140%]">3BHK apartments, cozy studios & dream houses - all with clear documentation</p>

            <div className="px-3 py-2 mt-3 bg-gradient-to-l from-[#6A3093] w-fit rounded-xl flex items-center justify-center to-[#A044FF]">
                <p>Find your home today</p>
            </div>
        </div>

        <div className={`${isMobile ? "order-1" : "order-2"}`}>
        <Image src="/housesearchbanner.png" alt="" width={300} height={300}></Image>
        </div>
     </div>
    )
}