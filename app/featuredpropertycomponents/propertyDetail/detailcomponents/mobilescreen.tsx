"use client"
import Image from "next/image"
import { useState,useEffect } from "react"
import { useMediaQuery } from "react-responsive"
export default function MobileScreen(){

    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[])

    const isMobile = useMediaQuery({maxWidth: 500})

    if (!mounted) return null
    return(

        <div className={`flex overflow-x-auto  gap-2 p-3 ${isMobile ? "w-[77vw]" : "w-[80vw]"} scrollbar-hide `}>
            <div className="shadow flex flex-col shrink-0 h-fit  rounded-xl p-3">

                <div className="w-full flex h-[34px]">
                    <Image src="/360-degrees.png" alt="hello" width={0} height={0} className="ml-auto mr-3 w-full  max-w-[27px] max-h-[27px]" unoptimized ></Image>
                </div>

                <div className="w-full relative h-fit  ">
                    <Image src="/highangle.png" alt="hello" width={0} height={0} className="w-full max-h-[200px] max-w-[220px]" unoptimized></Image>
                    <div className="flex text-white gap-1 absolute top-1/2 left-1/2 -translate-x-1/2 rounded-xl bg-[#2F2F2F40]] backdrop-blur-sm px-2 py-2">
                            <p>View 3D</p>
                        </div>
                </div>

                <div className="flex justify-between">
                    <div className="flex gap-1 w-full h-full">
                    <Image src="/squareandline.png" alt="hello" width={18} height={18} className="w-full max-w-[18px] max-h-[16px]"></Image>
                    <div className="flex flex-col gap-1">
                        <p className="text-[14px] text-[#111116] leading-[59%] font-medium">4 Anna</p>
                        <p className="text-[#787D9C] text-[12px] leading-[140%]">Carpet Area</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center justify-center w-full h-full">
                        <div>
                            <p className="font-bold text-[clamp(0.9rem,4vw,1.2rem)] ">रु</p>
                        </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-[14px] text-[#111116] leading-[59%] font-medium">1.6 Cr</p>
                        <p className="text-[#787D9C] text-[12px] leading-[140%]">Price</p>
                    </div>
                </div>
                </div>

             </div>

             <div className="shadow flex flex-col shrink-0 h-fit  rounded-xl p-3">

                <div className="w-full flex h-[34px]">
                    <Image src="/360-degrees.png" alt="hello" width={0} height={0} className="ml-auto mr-3 w-full  max-w-[27px] max-h-[27px]" unoptimized ></Image>
                </div>

                <div className="w-full relative h-fit  ">
                    <Image src="/highangle.png" alt="hello" width={0} height={0} className="w-full max-h-[200px] max-w-[220px]" unoptimized></Image>
                    <div className="flex text-white gap-1 absolute top-1/2 left-1/2 -translate-x-1/2 rounded-xl bg-[#2F2F2F40]] backdrop-blur-sm px-2 py-2">
                            <p>View 3D</p>
                        </div>
                </div>

                <div className="flex justify-between">
                    <div className="flex gap-1 w-full h-full">
                    <Image src="/squareandline.png" alt="hello" width={18} height={18} className="w-full max-w-[18px] max-h-[16px]"></Image>
                    <div className="flex flex-col gap-1">
                        <p className="text-[14px] text-[#111116] leading-[59%] font-medium">5 Anna</p>
                        <p className="text-[#787D9C] text-[12px] leading-[140%]">Carpet Area</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center justify-center w-full h-full">
                        <div>
                            <p className="font-bold text-[clamp(0.9rem,4vw,1.2rem)] ">रु</p>
                        </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-[14px] text-[#111116] leading-[59%] font-medium">3 Cr</p>
                        <p className="text-[#787D9C] text-[12px] leading-[140%]">Price</p>
                    </div>
                </div>
                </div>

             </div>

             <div className="shadow flex flex-col shrink-0 h-fit  rounded-xl p-3">

                <div className="w-full flex h-[34px]">
                    <Image src="/360-degrees.png" alt="hello" width={0} height={0} className="ml-auto mr-3 w-full  max-w-[27px] max-h-[27px]" unoptimized ></Image>
                </div>

                <div className="w-full relative h-fit  ">
                    <Image src="/highangle.png" alt="hello" width={0} height={0} className="w-full max-h-[200px] max-w-[220px]" unoptimized></Image>
                    <div className="flex text-white gap-1 absolute top-1/2 left-1/2 -translate-x-1/2 rounded-xl bg-[#2F2F2F40]] backdrop-blur-sm px-2 py-2">
                            <p>View 3D</p>
                        </div>
                </div>

                <div className="flex justify-between">
                    <div className="flex gap-1 w-full h-full">
                    <Image src="/squareandline.png" alt="hello" width={18} height={18} className="w-full max-w-[18px] max-h-[16px]"></Image>
                    <div className="flex flex-col gap-1">
                        <p className="text-[14px] text-[#111116] leading-[59%] font-medium">7 Anna</p>
                        <p className="text-[#787D9C] text-[12px] leading-[140%]">Carpet Area</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center justify-center w-full h-full">
                        <div>
                            <p className="font-bold text-[clamp(0.9rem,4vw,1.2rem)] ">रु</p>
                        </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-[14px] text-[#111116] leading-[59%] font-medium">5 Cr</p>
                        <p className="text-[#787D9C] text-[12px] leading-[140%]">Price</p>
                    </div>
                </div>
                </div>

             </div>

    </div>
    )
}