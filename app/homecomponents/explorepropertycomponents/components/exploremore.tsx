import { useSelector,useDispatch } from "react-redux";
import Image from "next/image"
import { useMediaQuery } from "react-responsive"
import { exploreData } from "@/data/exploreMoreData";
import { locationSelected, propertySelected } from "@/app/store/slices/exploreMoreFooter";
import { RootState } from "@/app/store/store";
import { footerLinks } from "@/data/exploreMoreData";

export default function ExploreMore(){

    const selectedProperty = useSelector(
        (state:RootState) => state.exploreMore.property
    )
    const selectedLocation = useSelector(
        (state:RootState) => state.exploreMore.location
    )

    const dispatch = useDispatch()

    const isMobile = useMediaQuery({maxWidth:900})

    const exploreDataType = exploreData.map((items) => items.type)

    const selectedType = exploreData.find(
        (items) => items.type === selectedProperty 
    )

    const location = selectedType?.locations??[]

    const selectedLocationData = location.find(
        (location) => location.location == selectedLocation
    )


    const propertyAreaData =
  selectedLocationData?.areas.flatMap((area) =>
    area.propertyTypes.map((type) => ({
      area: area.area,
      type,
    }))
  ) ?? [];

    const uniqueType = [
  ...new Set(propertyAreaData.map((item) => item.type))
];
    return(
        <div className="mb-10 w-full flex flex-col gap-2 ">
            <div>
                <p className="text-[clamp(1.3rem,3vw,2rem)] font-bold">Explore More Properties</p>
            </div>

            <div className="flex sm:justify-start sm:gap-20 justify-between border-b-1 border-[#F0EAF4]  h-full">
                {
                    exploreDataType.map((item,key)=>(
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
                    location.map((location,key)=>(
                        <div key={key} className={`px-3 py-2 ${selectedLocation== location.location?" border-[#6A3093] bg-[#F0EAF49C] text-[#6A3093]" : "text-[#BDBDCD] border-[#BDBDCD]"} cursor-pointer w-fit rounded-xl border-1`} onClick={()=>dispatch(locationSelected(location.location))}>
                    <p className=" text-[12px]">{location.location}</p>
                </div>
                    ))
                }
                
            </div>

            <div className="mt-3 flex gap-10 flex-wrap">
                {
                    uniqueType.map((type,id)=>(
                        <div key={id} className="flex items-center  gap-3 w-fit pr-6 border-r-[1px] border-[#F0EAF4] cursor-pointer">
                    <p className="text-[14px] leading-[140%]">{type}</p>
                    <Image src="/downarrow.png" alt="hello" width={0} height={0} className="w-[8px] h-[8px]" ></Image>
                </div>
                    ))
                }
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-x-15 gap-y-2 text-[#787D9C] text-[12px] leading-[140%]">
                {propertyAreaData.map((item, index) => (
                    <p
                    key={index}
                    className="text-[12px] leading-[140%] text-[#787D9C] cursor-pointer hover:-translate-y-[2px] transition-all duration-300"
                    >
                    {item.type} is for sale in {item.area}
                    </p>
                ))}
                </div>

            <div>
                <div className="flex gap-4 pt-2">
                    <div className="w-[24px] h-[24px]"><Image src="/facebook.png" alt="hello" width={24} height={14} className="w-full h-full" ></Image></div>
                    <div className="w-[24px] h-[24px]"><Image src="/instagram1.png" alt="hello" width={24} height={24} className="w-full h-full" ></Image></div>
                    <div className="w-[24px] h-[24px]"><Image src="/youtube.png" alt="hello" width={24} height={24} className="w-full h-full" ></Image></div>
                    <div className="w-[24px] h-[24px]"><Image src="/twitter.png" alt="hello" width={24} height={24} className="w-full h-full" ></Image></div>
                   
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