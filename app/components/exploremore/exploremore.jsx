"use client"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"
export default function ExploreMore(){

    const isMobile = useMediaQuery({maxWidth:900})
    return(
        <div className="mb-10 w-full flex flex-col gap-2 ">
            <div>
                <p className="text-[clamp(1.5rem,4vw,2rem)]">Explore More Properties</p>
            </div>

            <div className="flex gap-20 border-b-1 border-[#F0EAF4] pb-2">
                <div className="h-[10px]">
                    <p className="text-[#6A3093] text-[14px] leading-[140%]">Buy</p>
                    <div className="h-[2px] mt-[11px] rounded-xl w-full bg-[#6A3093]"></div>
                </div>
                <p>Rent</p>
                <p>Invest</p>
                <p>Services</p>
            </div>

            <div className="mt-3 flex gap-4 flex-wrap">
                <div className="px-3 py-2 border-1 border-[#6A3093] w-fit rounded-xl">
                    <p className="text-[#6A3093] text-[12px]">Kathmandu</p>
                </div>
                <div className="px-3 py-2 border-1 border-[#BDBDCD] w-fit rounded-xl">
                    <p className="text-[#BDBDCD] text-[12px]">Pokhara</p>
                </div>
                <div className="px-3 py-2 border-1 border-[#BDBDCD] w-fit rounded-xl">
                    <p className="text-[#BDBDCD] text-[12px]">Chitwan</p>
                </div>
                <div className="px-3 py-2 border-1 border-[#BDBDCD] w-fit rounded-xl">
                    <p className="text-[#BDBDCD] text-[12px]">Butwal</p>
                </div>
                <div className="px-3 py-2 border-1 border-[#BDBDCD] w-fit rounded-xl">
                    <p className="text-[#BDBDCD] text-[12px]">Jhapa</p>
                </div>
                <div className="px-3 py-2 border-1 border-[#BDBDCD] w-fit rounded-xl">
                    <p className="text-[#BDBDCD] text-[12px]">Kavre Palanchok</p>
                </div>
            </div>

            <div className="mt-3 flex gap-6 flex-wrap">
                <div className="flex items-center  gap-3 w-fit pr-6 border-r-[1px] border-[#F0EAF4] ">
                    <p className="text-[14px] leading-[140%]">Apartment</p>
                    <Image src="/downarrow.png" alt="hello" width={0} height={0} className="w-[8px] h-[8px]" ></Image>
                </div>
                <div className="flex items-center  gap-3 w-fit pr-6 border-r-[1px] border-[#F0EAF4] ">
                    <p className="text-[14px] leading-[140%]">Land</p>
                    <Image src="/downarrow.png" alt="hello" width={0} height={0} className="w-[8px] h-[8px]" ></Image>
                </div>
                <div className="flex items-center  gap-3 w-fit pr-6 border-r-[1px] border-[#F0EAF4] ">
                    <p className="text-[14px] leading-[140%]">House</p>
                    <Image src="/downarrow.png" alt="hello" width={0} height={0} className="w-[8px] h-[8px]" ></Image>
                </div>
                <div className="flex items-center  gap-3 w-fit pr-6 border-r-[1px] border-[#F0EAF4] ">
                    <p className="text-[14px] leading-[140%]">Villa</p>
                    <Image src="/downarrow.png" alt="hello" width={0} height={0} className="w-[8px] h-[8px]" ></Image>
                </div>
                <div className="flex items-center  gap-3 w-fit pr-6 border-r-[1px] border-[#F0EAF4] ">
                    <p className="text-[14px] leading-[140%]">Commercial House</p>
                    <Image src="/downarrow.png" alt="hello" width={0} height={0} className="w-[8px] h-[8px]" ></Image>
                </div>

                <div className="flex items-center  gap-3 w-fit pr-6 border-r-[1px] border-[#F0EAF4] ">
                    <p className="text-[14px] leading-[140%]">Commercial Rental Spaces</p>
                    <Image src="/downarrow.png" alt="hello" width={0} height={0} className="w-[8px] h-[8px]" ></Image>
                </div>
                <div className="flex items-center  gap-3 w-fit pr-6 border-r-[1px] border-[#F0EAF4] ">
                    <p className="text-[14px] leading-[140%]">Commercial Lands</p>
                    <Image src="/downarrow.png" alt="hello" width={0} height={0} className="w-[8px] h-[8px]" ></Image>
                </div>
            </div>

            <div className="mt-4 flex pb-4 border-b-1 border-[#F0EAF4] gap-80 pr-4 whitespace-nowrap">
                <div className="flex flex-col gap-2">
                    <p className="text-[12px] leading-[140%] text-[#787D9C]">Apartment In Imadol</p>
                    <p className="text-[12px] leading-[140%] text-[#787D9C]">Apartment In Imadol</p>
                    <p className="text-[12px] leading-[140%] text-[#787D9C]">Apartment In Imadol</p>
                    <p className="text-[#F0A300] leading-[140%] text-[12px]">Show More...</p>
                </div>
                {
                    !isMobile&&
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col gap-2">
                            <p className="text-[12px] leading-[140%] text-[#787D9C]">Apartment In Imadol</p>
                            <p className="text-[12px] leading-[140%] text-[#787D9C]">Apartment In Imadol</p>
                            <p className="text-[12px] leading-[140%] text-[#787D9C]">Apartment In Imadol</p>
                            <p className="text-[#F0A300] leading-[140%] text-[12px]">Show More...</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-[12px] leading-[140%] text-[#787D9C]">Apartment In Imadol</p>
                            <p className="text-[12px] leading-[140%] text-[#787D9C]">Apartment In Imadol</p>
                            <p className="text-[12px] leading-[140%] text-[#787D9C]">Apartment In Imadol</p>
                            <p className="text-[#F0A300] leading-[140%] text-[12px]">Show More...</p>
                        </div>
                    </div>
                }
                
            </div>
        </div>
    )
}