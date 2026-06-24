import Money from "@/features/propertyDetail/moneyview/money";
import SchedulingandCalbackbutt from "./templets/SchedulaandCalbackButt";
import TypeAndPricing from "@/features/propertyDetail/apartmentDetail/typeAndPricing";
import Image from "next/image";
import type { Property } from "@/type/DetailPageType";

type IsMobileWidth = {
    
    isMobile : boolean
    isMobile400 : boolean
    isSelectedArray: Property
}

export default function PropertyDetailTopSec({
    isMobile,
    isMobile400,
    isSelectedArray
} : IsMobileWidth){
    return(
        <div className={` ${isMobile ? "mt-[-25px]" : "mt-14"} flex justify-between `}>
                <div className=" w-full">
                <div  className="flex flex-col gap-2">
                    <p className="font-bold text-[clamp(1.1rem,4vw,1.2rem)] leading-[140%]">{isSelectedArray.top.title}</p>
                    <div className="flex gap-1 items-center">
                        <p>⚲</p>
                        <p className="text-[14px] leading-[140%]">{isSelectedArray.top.location}</p>
                    </div>

                     {
                        !isMobile&&
                        <SchedulingandCalbackbutt></SchedulingandCalbackbutt>
                    }
                    {
                        isMobile&&
                        <TypeAndPricing typeAndPricing={isSelectedArray.typeAndPricing}></TypeAndPricing>
                    }
                    {
                        isMobile&&
                        <Money></Money>
                    }
                    {
                        isMobile&&
                        <div className={`bg-[#F0A300] flex ${isMobile400? "w-[90%]" : "w-[40%]"} items-center justify-center gap-3 px-5 py-3 rounded-xl`}>
                            <Image src="/phone.png" alt="hello" width={0} height={0} className="h-[20px] w-[20px]"></Image>
                            <p className="font-semibold text-white text-[16px]">Owner</p>
                        </div>
                    }
                </div>
            </div>

                {
                    !isMobile &&
                    <div>
                        <Money ></Money>
                    </div>
                }
            </div>
    )
    
}