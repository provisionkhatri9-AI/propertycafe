import Image from "next/image"
import { useMediaQuery } from "react-responsive"
import MobileScreen from "./mobilescreen"
import { RootState } from "@/store/store"
import { useSelector,useDispatch } from "react-redux"
import RoomAndSize from "./roomAndSize"
import AanaSelectionBox from "./aanaSelectionBox"
import FloorView from "./floorView"
import EnterArrow from "./enterArrow"
import SeeAllProperties from "./seeAllProperties"
import type { Property } from "@/type/DetailPageType"

type SelectedArray ={
    selectedArray : Property
}
export default function FlooringandPricing({
    selectedArray
} :SelectedArray){

    const isBigMobile1 = useMediaQuery({maxWidth:1047})
    const isBigMobile = useMediaQuery({maxWidth:1017})
    const isMobile = useMediaQuery({maxWidth:780})
    const isLittleMobile = useMediaQuery({maxWidth : 700})
   
    return(
        <div className={`${isLittleMobile? "p-0":"shadow p-7"} rounded-2xl  flex flex-col items-center ${isLittleMobile?"gap-2":"gap-7"}`}>
            <div className="w-full">
                <p className="font-semibold text-[18px] w-full self-start leading-[140%] text-[#4B4B4B]">Floors and Pricing</p>
            </div>

            <div className="w-full">
                {
                isLittleMobile&&
                <div className="px-2 w-fit  rounded-xl py-1 bg-[#E7EDFF]">
                    <p className="text-[#5379FF] text-[14px] leading-[140%]">{selectedArray.typeAndPricing.type}</p>
                </div>
            }
            </div>

            <AanaSelectionBox isLittleMobile={isLittleMobile} isMobile={isMobile} priceAndFloor={selectedArray.priceAndFloor} ></AanaSelectionBox>

            {
                !isLittleMobile&&
                <FloorView selectedArray={selectedArray}></FloorView>
            }

            {
                !isLittleMobile&&
                <EnterArrow isBigMobile={isBigMobile} isMobile={isMobile}></EnterArrow>
            }

           {
             !isLittleMobile&&
             <div className={`${isLittleMobile? "w-[420px]" : ""} ${isBigMobile1? "w-[500px]" : "w-[550px]"} flex items-center justify-center  `}>
                <div className="relative  h-full w-[40px] shrink-0   flex items-center justify-center">
                
                    <RoomAndSize property={selectedArray.roomAndSize}></RoomAndSize>
    
            </div>
                
            </div>
           }

           {
            isLittleMobile&&
            <div className=" flex flex-col gap-2  w-full">
             <MobileScreen></MobileScreen>
             <SeeAllProperties></SeeAllProperties>
           </div>
           }
           
        </div>
    )
}