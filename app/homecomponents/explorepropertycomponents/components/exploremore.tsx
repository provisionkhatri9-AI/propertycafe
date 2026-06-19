import { useSelector,useDispatch } from "react-redux";
import Image from "next/image"
import { useMediaQuery } from "react-responsive"

import { places,propertyTypes,locationSales,brsi,footerLinks } from "@/data/exploreMoreData";
import { locationSelected, propertySelected } from "@/app/store/slices/exploreMoreFooter";
import { RootState } from "@/app/store/store";

export default function ExploreMore(){

    const selectedProperty = useSelector(
        (state:RootState) => state.exploreMore.property
    )
    const selectedLocation = useSelector(
        (state:RootState) => state.exploreMore.location
    )

    const dispatch = useDispatch()

    const isMobile = useMediaQuery({maxWidth:900})
    return(
        <div className="mb-10 w-full flex flex-col gap-2 ">
            <div>
                <p className="text-[clamp(1.3rem,3vw,2rem)] font-bold">Explore More Properties</p>
            </div>

            <div className="flex sm:justify-start sm:gap-20 justify-between border-b-1 border-[#F0EAF4]  h-full">
                {
                    brsi.map((item,key)=>(
                <div key={key} className="h-[10px] h-fit  flex flex-col items-center cursor" onClick={()=>dispatch(propertySelected(item))}>
                    <p className={`${selectedProperty ==item ? "text-[#6A3093]" : "text-[#787D9C]"} text-[14px] leading-[140%]`}>{item}</p>
                    {
                        selectedProperty == item&&
                        <div className="h-[3px] mt-[11px] rounded-xl w-[150%] bg-[#6A3093]"></div>
                    }
                </div>
                    ))
                }
                
            </div>

            <div className="mt-3 flex  gap-4 flex-wrap">
                {
                    places.map((location)=>(
                        <div key={location} className={`px-3 py-2 ${selectedLocation== location?" border-[#6A3093] bg-[#F0EAF49C] text-[#6A3093]" : "text-[#BDBDCD] border-[#BDBDCD]"} cursor-pointer w-fit rounded-xl border-1`} onClick={()=>dispatch(locationSelected(location))}>
                    <p className=" text-[12px]">{location}</p>
                </div>
                    ))
                }
                
            </div>

            <div className="mt-3 flex gap-10 flex-wrap">
                {
                    propertyTypes.map((type,id)=>(
                        <div key={id} className="flex items-center  gap-3 w-fit pr-6 border-r-[1px] border-[#F0EAF4] cursor-pointer">
                    <p className="text-[14px] leading-[140%]">{type}</p>
                    <Image src="/downarrow.png" alt="hello" width={0} height={0} className="w-[8px] h-[8px]" ></Image>
                </div>
                    ))
                }
            </div>

            <div className="mt-4 flex pb-4 border-b-1 border-[#F0EAF4] gap-80 pr-4 whitespace-nowrap">
                <div className="flex flex-col gap-2">
                    {
                        locationSales.Baneshwor.map((item,id)=>(
                            <p key={id} className="text-[12px] leading-[140%] text-[#787D9C] cursor-pointer hover:-translate-y-[2px]  transition-all duration-300">{item}</p>
                        ))
                    }
                    <p className="text-[#F0A300] leading-[140%] text-[12px] cursor-pointer hover:-translate-y-[2px]  transition-all duration-300">Show More...</p>
                </div>
                {
                    !isMobile&&
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col gap-2">
                            {
                        locationSales.Koteshwor.map((item,id)=>(
                            <p key={id} className="text-[12px] leading-[140%] text-[#787D9C] cursor-pointer hover:-translate-y-[2px]  transition-all duration-300">{item}</p>
                        ))
                    }
                            <p className="text-[#F0A300] leading-[140%] text-[12px] cursor-pointer hover:-translate-y-[2px]  transition-all duration-300">Show More...</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            {
                        locationSales.Imadol.map((item,id)=>(
                            <p key={id} className="text-[12px] leading-[140%] text-[#787D9C] cursor-pointer hover:-translate-y-[2px]  transition-all duration-300">{item}</p>
                        ))
                    }
                            <p className="text-[#F0A300] leading-[140%] text-[12px] cursor-pointer hover:-translate-y-[2px]  transition-all duration-300">Show More...</p>
                        </div>
                    </div>
                }
                
            </div>

            <div>
                <div className="flex gap-4 pt-2">
                    <div className="w-[24px] h-[24px]"><Image src="/facebook.png" alt="hello" width={0} height={0} className="w-full h-full" unoptimized></Image></div>
                    <div className="w-[24px] h-[24px]"><Image src="/instagram1.png" alt="hello" width={0} height={0} className="w-full h-full" unoptimized></Image></div>
                    <div className="w-[24px] h-[24px]"><Image src="/youtube.png" alt="hello" width={0} height={0} className="w-full h-full" unoptimized></Image></div>
                    <div className="w-[24px] h-[24px]"><Image src="/twitter.png" alt="hello" width={0} height={0} className="w-full h-full" unoptimized></Image></div>
                   
                </div>
            </div>
            <div className="flex justify-between pt-3 whitespace-nowrap flex-wrap">
                {
                    footerLinks.map((item,id)=>(
                        <p key={id} className="text-[12px] leading-[140%] text-[#787D9C] hover:-translate-y-[2px] hover:scale-101 transition-all  duration-300 cursor-pointer">{item}</p>
                    ))
                }
                
            </div>

            <div className="flex items-center justify-center flex-col gap-4 pt-3">
                <p className="text-[24px] leading-[140%] font-bold "><span className="text-[#A044FF]">Property</span>CafeNepal.com</p>
                <p className="text-[#787D9C] text-[12px] leading-[140%] ">@2025 Property Cafe Nepal. All Rights Reserved</p>
            </div>
        </div>
    )
}