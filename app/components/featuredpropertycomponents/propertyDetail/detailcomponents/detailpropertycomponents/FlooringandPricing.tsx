"use client"
import { useState,useEffect } from "react"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"
import MobileScreen from "./mobilescreen"
export default function FlooringandPricing(){
    const [mounted, setMounted] = useState(false)

        useEffect(() => {
            setMounted(true)
        }, [])
    
        const isBigMobile1 = useMediaQuery({maxWidth:1047})
    const isBigMobile = useMediaQuery({maxWidth:1017})
    const isMobile = useMediaQuery({maxWidth:780})
    const isLittleMobile = useMediaQuery({maxWidth : 700})
    
    if (!mounted) return null
    return(
        <div className={`${isLittleMobile? "p-0":"shadow p-7"} rounded-2xl  flex flex-col items-center ${isLittleMobile?"gap-2":"gap-7"}`}>
            <div className="w-full">
                <p className="font-semibold text-[18px] w-full self-start leading-[140%] text-[#4B4B4B]">Floors and Pricing</p>
            </div>

            <div className="w-full">
                {
                isLittleMobile&&
                <div className="px-2 w-fit  rounded-xl py-1 bg-[#E7EDFF]">
                    <p className="text-[#5379FF] text-[14px] leading-[140%]">2BHK Apartment</p>
                </div>
            }
            </div>

            <div className="w-full">
                <p className={`flex text-[14px] w-full mb-3 leading-[140%] ${isMobile ? "justify-between" : ""} `}>Showing all sizes<span className="text-[#787D9C] ">(1 Anna = 342.25 Sq.ft)</span></p>
               
                    {
                        !isLittleMobile&&
                        <div className="border-[0.5px]  flex justify-between  border-[#F0EAF4] p-3 rounded-2xl">
                    <div className="p-2 w-[full h-[45px] bg-[#F0EAF4] rounded-xl flex items-center justify-center">
                        <p className="text-[14px] leading-[140%] text-[#6A3093]">4 Anna</p>
                    </div>

                    <div className="p-2 w-[65px] h-[45px] rounded-xl flex items-center justify-center">
                        <p className="text-[14px] leading-[140%] text-[#111116]">5 Anna</p>
                    </div>

                    <div className="p-2 w-[65px] h-[45px] rounded-xl flex items-center justify-center">
                        <p className="text-[14px] leading-[140%] text-[#111116]">6 Anna</p>
                    </div>

                    <div className="p-2 w-[65px] h-[45px] rounded-xl flex items-center justify-center">
                        <p className="text-[14px] leading-[140%] text-[#111116]">7 Anna</p>
                    </div>
                    <div className="p-2 w-[65px] h-[45px] rounded-xl flex items-center justify-center">
                        <p className="text-[14px] leading-[140%] text-[#111116]">8 Anna</p>
                    </div>
                </div>
                    }

            </div>

            {
                !isLittleMobile&&
                <div className="relative hidden md:block w-full ">
                <div>
                    <p className="text-[#9D98A0] text-[16px] leading-[140%]">2 BHK Apartment</p>
                    <p className="font-semibold text-[18px] text-[#111116] leading-[140%]">रु2.3Cr</p>
                </div>
                <div className="absolute top-0 right-0 flex flex-col hidden md:flex gap-3">
                    <div className="flex items-center justify-center border-[1px] border-[#F0F2FC] shadow rounded-2xl px-3 py-2">
                        <div className="bg-[#FEF6E6] px-5 py-1.5 rounded-xl">
                            <p className="font-semibold text-[#F0A300] text-[16px] leading-[140%]">3D</p>
                        </div>
                        <div className=" px-5 py-1.5 rounded-xl">
                            <p className="font-semibold text-[#9D98A0] text-[16px] leading-[140%]">2D</p>
                        </div> 
                    </div>

                    <div className="flex items-center bg-white  justify-center border-[1px] border-[#F0F2FC] shadow rounded-2xl px-1 py-1">
                        <div className=" px-1 py-1.5 rounded-xl">
                            <Image src="/rot1.png" alt="hello" width={0} height={0} className="w-[30px] h-[30px]" unoptimized></Image>
                        </div>
                        <div className="  px-1 py-1.5 rounded-xl">
                            <p className="font-semibold text-[#9D98A0] text-[16px] leading-[140%]">Rotate</p>
                        </div> 
                        <div className=" px-1py-1.5 rounded-xl">
                            <Image src="/rot2.png" alt="hello" width={0} height={0} className="w-[17px] h-[17px]" unoptimized></Image>
                        </div>
                    </div>

                    <div className="flex items-center gap-1 bg-white  justify-center border-[1px] border-[#F0F2FC] shadow rounded-2xl px-1 py-1">
                        <div className=" px-1 py-1.5 rounded-xl">
                            <Image src="/mag2.png" alt="hello" width={0} height={0} className="w-[24px] h-[24px]" unoptimized></Image>
                        </div>
                        <div className="  px-1 py-1.5 rounded-xl">
                            <p className="font-semibold text-[#9D98A0] text-[16px] leading-[140%]">100%</p>
                        </div> 
                        <div className=" px-1py-1.5 rounded-xl">
                            <Image src="/mag1.png" alt="hello" width={0} height={0} className="w-[20px] h-[20px]" unoptimized></Image>
                        </div>
                    </div>
                    
                </div>
            </div> 
            }

            {
                !isLittleMobile&&
                <div className="w-full ">
                <div className="relative w-full">
                    <div className=" text-[#F0A300] flex w-full items-center ">
                        <p className=" absolute text-[25px] top-[65%]">Enter</p>
                        <p className={`absolute rotate-325 text-[clamp(5rem,4vw,12rem)]  ${isBigMobile? "top-[50%]" : "top-[47%]"} ${isMobile?"top-[47%]": ""} left-[8%]`}>➡</p>
                    </div>
                    <div className="pl-20">
                        <Image src="/allroommap.png" alt="hello" width={0} height={0} className="max-w-[622px] w-full max-h-[467px]" unoptimized></Image>
                    </div>
                </div>
            </div>
            }

            

           {
             !isLittleMobile&&
             <div className={`${isLittleMobile? "w-[420px]" : ""} ${isBigMobile1? "w-[500px]" : "w-[550px]"} flex items-center justify-center  `}>
                <div className="relative  h-full w-[40px] shrink-0   flex items-center justify-center">
                    <div className="border-4 rounded-full   h-fit p-2 border-[#FFD1DC] absolute">
                        <Image src="/downarrow.png" alt="hello" width={0} height={0} className="w-3 h-3 rotate-90"></Image>
                    </div>
                </div>
                <div className="max-w-[600px] min-w-[200px] py-1 px-2 flex gap-2 overflow-x-auto scrollbar-hide">
                <div className="flex flex-col gap-2 items-center border-[1px] border-[#F0EAF4] whitespace-nowrap radius-xl w-fit px-3">
                    <p className="text-[#4B4B4B] text-[14px] leading-[140%]">Bedroom 1</p>
                    <p className="text-[#4B4B4B] text-[14px] leading-[140%]">11’ 10’’ X 10’ 0’’</p>
                </div>

                <div className="flex flex-col gap-2 items-center border-[1px] border-[#F0EAF4] whitespace-nowrap radius-xl w-fit px-3">
                    <p className="text-[#4B4B4B] text-[14px] leading-[140%]">Attached Bathroom with Bedroom 1</p>
                    <p className="text-[#4B4B4B] text-[14px] leading-[140%]">7’ 0’’ X 4’ 0’’</p>
                </div>

                <div className="flex flex-col gap-2 items-center border-[1px] border-[#F0EAF4] whitespace-nowrap radius-xl w-fit px-3">
                    <p className="text-[#4B4B4B] text-[14px] leading-[140%]">Living Room</p>
                    <p className="text-[#4B4B4B] text-[14px] leading-[140%]">11’ 10’’ X 10’ 0’’</p>
                </div>

                <div className="flex flex-col gap-2 items-center border-[1px] border-[#F0EAF4] whitespace-nowrap radius-xl w-fit px-3">
                    <p className="text-[#4B4B4B] text-[14px] leading-[140%]">Living Room</p>
                    <p className="text-[#4B4B4B] text-[14px] leading-[140%]">11’ 10’’ X 10’ 0’’</p>
                </div>

                <div className="flex flex-col gap-2 items-center border-[1px] border-[#F0EAF4] whitespace-nowrap radius-xl w-fit px-3">
                    <p className="text-[#4B4B4B] text-[14px] leading-[140%]">Common Bathroom</p>
                    <p className="text-[#4B4B4B] text-[14px] leading-[140%]">11’ 10’’ X 10’ 0’’</p>
                </div>
            </div>
                <div className="relative w-[40px] shrink-0   h-full flex items-center justify-center">
                    <div className="border-4 rounded-full h-fit p-2 border-[#FFD1DC] absolute">
                        <Image src="/downarrow.png" alt="hello" width={0} height={0} className="w-3 h-3 rotate-270"></Image>
                    </div>
                </div>
            </div>
           }

           {
            isLittleMobile&&
            <div className=" flex flex-col gap-2  w-full">
             <MobileScreen></MobileScreen>

             <div className="flex flex-col gap-1 font-medium text-[14px] leading-[140%] text-[#4B4B4B]">
                <div className="flex items-center gap-1" >
                    <p className="">See all <span className="text-[#F0A300]">14 Properties to buy</span> in Budanilkantha</p>
                    <Image src="/squarearrow.png" alt="hello" width={0} height={0} className="w-[14px] h-[14px]"></Image>
                </div>

                <div className="flex items-center gap-1">
                    <p className="">See all <span className="text-[#F0A300]">14 Properties to rent</span> in Budanilkantha</p>
                    <Image src="/squarearrow.png" alt="hello" width={0} height={0} className="w-[14px] h-[14px]"></Image>
                </div>
             </div>
           </div>
           }
           
        </div>
    )
}