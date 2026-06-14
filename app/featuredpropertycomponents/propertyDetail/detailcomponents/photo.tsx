"use client"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"
export default function Photo(){

    const isMobileMore = useMediaQuery({maxWidth:1000})
    const isMobile = useMediaQuery({maxWidth: 800})
        return(
            <div className="flex gap-3 px-2 py-3 w-full -translate-x-[8px]">
                <div className={` rounded-xl overflow-hidden  min-w-[400px] w-fit flex flex-col gap-2  relative`}>
                    <Image src="/featuredproduct3.jpg" alt="hello" width={605} height={450} className=" min-w-[400px] min-h-[300px]" unoptimized></Image>
                    <div className={`flex gap-1 ${isMobile ? "order-[-1] self-end" : "absolute"} inset-4`}>
                        <div className="flex items-center shadow  gap-1 w-fit rounded-md h-fit py-1 px-3  bg-white">
                            <Image src="/love.png" alt="hello" width={0} height={0} className="w-[14px] h-[14px]"></Image>
                            <p className="text-[14px] leading-[140%] ">Like</p>
                        </div>

                        <div className="flex items-center shadow gap-1 rounded-md w-fit h-fit px-3 py-1  bg-white">
                            <Image src="/share.png" alt="hello" width={0} height={0} className="w-[12px] h-[12px]"></Image>
                            <p className="text-[14px] leading-[140%] ">Share</p>
                        </div>
                       
                    </div>

                    <div className="absolute bottom-3 right-5 flex gap-2 ">

                        {
                            isMobile &&
                            <div className="flex gap-2">
                                <div className="flex gap-2 items-center rounded-md px-4 py-1 bg-[#2F2F2F]/25 backdrop-blur-xl ">
                            <Image src="/earth.png" alt="hello" width={0} height={0} className="w-[20px]"></Image>
                            
                        </div>

                        <div className="flex gap-2 items-center rounded-md px-4 py-1 bg-[#2F2F2F]/25 backdrop-blur-xl ">
                            <Image src="/layer.png" alt="hello" width={0} height={0} className="w-[20px]"></Image>
                            
                        </div>
                            </div>
                        }
                        {
                            isMobileMore &&
                            <div className="flex gap-2 items-center justify-center rounded-md px-4 py-1 bg-[#2F2F2F]/25 backdrop-blur-xl ">
                            <Image src="/image-gallery.png" alt="hello" width={0} height={0} className="w-[20px]"></Image>
                            <p className="text-white">+</p>
                            </div>
                        }

                        
                    </div>
                </div>

                {   
                    !isMobile &&
                    <div className="flex flex-col gap-2 ">
                    <div className=" rounded-xl overflow-hidden relative">
                        <Image src="/featuredproduct3.jpg" alt="hello" width={297} height={147} className="min-w-[220px] min-h-[146px]" unoptimized></Image>
                        <div className="h-full w-full bg-black/20 absolute inset-0"></div>
                        <div className="flex text-white gap-1 absolute top-1/2 left-1/2 -translate-x-1/2 rounded-xl bg-[#2F2F2F40]] backdrop-blur-sm px-2 py-2">
                            <Image src="/earth.png" alt="hello" width={5} height={5} className="h-5 w-5 "></Image>
                            <p>360 tour</p>
                        </div>
                    </div>
                    <div className=" rounded-xl relative overflow-hidden">
                        <Image src="/featuredproduct3.jpg" alt="hello" width={297} height={147} className="min-w-[220px] min-h-[146px]" unoptimized></Image>
                        <div className="h-full w-full bg-black/20 absolute inset-0"></div>
                        <div className="flex text-white gap-1 absolute top-1/2 left-1/2 -translate-x-1/2 rounded-xl bg-[#2F2F2F40]] backdrop-blur-sm px-2 py-2">
                            <p>Floor Plan</p>
                        </div>
                    </div>
                </div>
                }

                {
                    !isMobileMore &&
                    <div className="flex flex-col gap-2 ">
                    <div className=" rounded-xl relative overflow-hidden">
                        <Image src="/featuredproduct3.jpg" alt="hello" width={297} height={147} className="min-w-[220px] min-h-[146px]" unoptimized></Image>
                        <div className="h-full w-full bg-black/20 absolute inset-0"></div>
                        <div className="flex text-white gap-1 absolute top-1/2 left-1/2 -translate-x-1/2 rounded-xl bg-[#2F2F2F40]] backdrop-blur-sm px-2 py-2">
                            <p>Area</p>
                        </div>
                    </div>
                    <div className=" rounded-xl relative overflow-hidden">
                        <Image src="/featuredproduct3.jpg" alt="hello" width={297} height={147} className="min-w-[220px] min-h-[146px]" unoptimized></Image>
                        <div className="h-full w-full bg-black/20 absolute inset-0"></div>
                        <div className="flex text-white gap-1 absolute top-1/2 left-1/2 -translate-x-1/2 rounded-xl bg-[#2F2F2F40]] backdrop-blur-sm px-2 py-2">
                            <p>30 More Photos</p>
                        </div>
                    </div>
                </div>
                }

                

                
            </div>
        )
}