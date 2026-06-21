"use client"
import Image from "next/image"

import { useDispatch, useSelector } from "react-redux"
import { Manrope } from "next/font/google"
import { useMediaQuery } from "react-responsive"
import { hideCookie } from "./store/slices/cookie"
import { RootState } from "./store/store"
import { useEffect,useState } from "react"

const manrope = Manrope({
    subsets : ["latin"],
    weight : ["400","500","600","700"]
})

export default function CookieUI(){

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
}, []);



    const isMobile = useMediaQuery({maxWidth:767})

    

    const dispatch = useDispatch()

    const selected = useSelector(
        (state : RootState) => state.cookie.showCookie
    )

    if(!mounted) return null

    if(!selected) return null




    return(
        <div className={`fixed w-full bottom-0   z-1000 `}>
            <div className="w-full flex items-center justify-center">
                <div className={`flex ${isMobile? "flex-col  w-[98%] rounded-t-[12px]" : "flex-row  w-[95%] rounded-[12px]"} items-center  shadow  p-[12px] gap-[24px] bg-white`}>
            <div className={`flex w-full  ${isMobile? "items-start" : "items-center"} height-fit  gap-[5px]`}>
                <div className={`${isMobile? "h-[40px] w-[45px] " : "min-h-[60px] min-w-[60px]"}  relative bg-[#F0EAF4] rounded-full`}>
                    <div className={`  absolute ${isMobile? "top-[8px] left-0 w-[37px] h-[37px]" : "top-[12.5px]  left-[6px] w-[45px] h-[45px]"}  `}>
                        <Image src="/cookie.svg" alt="hello"  width={0} height={0} className="absolute top-[-7.67px] left-[2.67px] w-full h-full border-2 "/>

                    </div>

                </div>
                <div className="flex flex-col w-fit h-fit">

                    <p className={manrope.className + " font-semibold text-[16px] leading-[22px]" }>Do you allow  us to use cookies?</p>
                    <p className="text-[14px] leading-[140%] ">We use cookies to learn where you struggle when you’re navigating our website and fix them for your future visit.</p>
                    
                </div>

            </div>

            <div className="flex w-fit h-fit gap-[16px]">
                <div className=" bg-gradient-to-l from-[#A044FF] to-[#6A3093] p-[2px]  rounded-[12px] ">
                    <button type="button" className=" p-[10px] bg-white rounded-[10px] cursor-pointer group" onClick={()=>dispatch(hideCookie())}>
                        <div className={manrope.className + " font-semibold text-[16px] leading-[22px] w-[123px] h-[22px] group-hover:-translate-y-[2px] group-hover:scale-1.3 duration-300 transition-all text-[#6A3093] flex items-center"}>
                             Decline Cookies
                        </div>
                    </button>
                </div>
                <button type="button" className="bg-gradient-to-l from-[#A044FF] to-[#6A3093] flex items-center rounded-[8px] group p-[10px] cursor-pointer" onClick={()=>dispatch(hideCookie())}>
                    <p className="w-[120px] h-[22px] font-semibold text-[16px] leading-[22px] group-hover:-translate-y-[2px] transition-all duration-300">Accept Cookies</p>
                </button>

            </div>

        </div>
            </div>
        </div>
    )
}