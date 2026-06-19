import Image from "next/image"
import { useMediaQuery } from "react-responsive"
import type { TopImagesInterface } from "@/data/detailPropertyData"

interface ImageType{
    images: TopImagesInterface
}

export default function Photo({
    images
}: ImageType ){

    const isMobileMore = useMediaQuery({maxWidth:1000})
    const isMobile = useMediaQuery({maxWidth: 800})
        return(
            <div className="flex gap-3 px-2 py-3 w-full -translate-x-[8px]">
                <div className={`overflow-hidden  min-w-[250px] w-fit  flex flex-col gap-2  relative`}>
                   
                        <div className="w-full h-full  rounded-xl overflow-hidden relative group cursor-pointer">
                            <Image src={images.cover} alt="hello" width={600} height={600} className=" w-full min-w-[220px] max-w-[605px] min-h-[240px] max-h-[450] h-full group-hover:scale-101 transition-all duration-300 " priority  ></Image>
                            <div className="inset-0 w-full h-full bg-black absolute opacity-0 hover:opacity-20 transition-opacity duration-300 z-[20]"></div>
                        </div>
                    
                    <div className={`flex gap-1 ${isMobile ? "order-[-1] self-end" : "absolute"} inset-4`}>
                        <div className="flex items-center shadow  gap-1 w-fit rounded-md h-fit py-1 px-3  bg-white cursor-pointer hover:-translate-y-[2px] z-[30] transition-all duration-300">
                            <Image src="/love.png" alt="hello" width={0} height={0} className="w-[14px] h-[14px]"></Image>
                            <p className="text-[14px] leading-[140%] ">Like</p>
                        </div>

                        <div className="flex items-center shadow gap-1 rounded-md w-fit h-fit px-3 py-1  bg-white cursor-pointer hover:-translate-y-[2px] z-[30] transition-all duration-300">
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
                    <div className=" rounded-xl overflow-hidden relative group">
                        <Image src={images.tour360} alt="hello" width={297} height={147} className="min-w-[220px] h-[180px] group-hover:scale-101 transition-all duration-300" ></Image>
                        <div className="h-full w-full bg-black/20 group-hover:bg-black/30 absolute inset-0 z-[10] transition-all duration-300"></div>
                        <div className="flex text-white gap-1 absolute top-1/2 left-1/2 -translate-x-1/2 rounded-xl bg-[#2F2F2F40]] backdrop-blur-sm px-2 py-2 group-hover:scale-101 group-hover:-translate-y-[2px] transition-all duration-300 z-[10]">
                            <Image src="/earth.png" alt="hello" width={5} height={5} className="h-5 w-5 "></Image>
                            <p>360 tour</p>
                        </div>
                    </div>
                    <div className=" rounded-xl relative overflow-hidden">
                        <Image src={images.floorPlan} alt="hello" width={297} height={147} className="min-w-[220px] h-[180px]" ></Image>
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
                        <Image src={images.area} alt="hello" width={297} height={147} className="min-w-[220px] h-[180px]" ></Image>
                        <div className="h-full w-full bg-black/20 absolute inset-0"></div>
                        <div className="flex text-white gap-1 absolute top-1/2 left-1/2 -translate-x-1/2 rounded-xl bg-[#2F2F2F40]] backdrop-blur-sm px-2 py-2">
                            <p>Area</p>
                        </div>
                    </div>
                    <div className=" rounded-xl relative overflow-hidden">
                        <Image src={images.room} alt="hello" width={297} height={147} className="min-w-[220px] h-[180px]" ></Image>
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