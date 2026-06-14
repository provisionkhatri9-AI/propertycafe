"use client"
import Image from "next/image"

import { Manrope } from "next/font/google"
import { useMediaQuery } from "react-responsive"

const manrope = Manrope({
    subsets : ["latin"],
    weight : ["400","500","600","700"]
})

export default function CookieUI(){
    const isMobile = useMediaQuery({maxWidth:767})


    return(
        <div className={`flex ${isMobile? "flex-col" : "flex-row"} items-center w-[95%]  h-[127px] rounded-[12px] p-[12px] gap-[24px] bg-white`}>
            <div className={`flex w-full ${isMobile? "items-start" : "items-center"} height-fit gap-[5px]`}>
                <div className={`${isMobile? "h-[40px] w-[40px]" : "min-h-[60px] min-w-[60px]"}  relative bg-[#F0EAF4] rounded-full`}>
                    <div className={`w-[44px] h-[44px] absolute ${isMobile? "top-[-3px] left-[-2px]" : "top-[8.5px]  left-[8px]"}  `}>
                        <Image src="/cookieicon.svg" alt="hello"  width={36.67} height={36.67} className="absolute top-[3.67px] left-[3.67px]"/>

                    </div>

                </div>
                <div className="flex flex-col w-fit h-fit">

                    <p className={manrope.className + " font-semibold text-[16px] leading-[22px]" }>Do you allow  us to use cookies?</p>
                    <p className="text-[14px] leading-[140%] ">We use cookies to learn where you struggle when you’re navigating our website and fix them for your future visit.</p>
                    
                </div>

            </div>

            <div className="flex w-fit h-fit gap-[16px]">
                <div className=" bg-gradient-to-l from-[#A044FF] to-[#6A3093] p-[2px]  rounded-[12px] ">
                    <div className=" p-[10px] bg-white rounded-[10px]">
                        <div className={manrope.className + " font-semibold text-[16px] leading-[22px] w-[123px] h-[22px] text-[#6A3093] flex items-center"}>
                             Decline Cookies
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-l from-[#A044FF] to-[#6A3093] flex items-center rounded-[8px] p-[10px]">
                    <p className="w-[120px] h-[22px] font-semibold text-[16px] leading-[22px]">Accept Cookies</p>
                </div>

            </div>

        </div>
    )
}