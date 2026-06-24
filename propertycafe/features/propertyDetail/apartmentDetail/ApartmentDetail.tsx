import dynamic from "next/dynamic"
import { useMediaQuery } from "react-responsive"
import Image from "next/image"
import TypeAndPricing from "./typeAndPricing"
import { getPropertyFeatures } from "@/utils/propertyFeatures"
import Overview from "./Overview";
import Highlight from "./Highlights";
import FeaturesAndAminities from "./featureaAndAminities"
import type { Property } from "@/type/DetailPageType"


const FlooringandPricing = dynamic(
  () => import("../floorandprice/FlooringandPricing"),
  {
    loading: () => <div>Loading pricing...</div>,
  }
);

type SelectedPropertyArray={
    selectedPropertyArray: Property
}

export default function ApartmentDetail({
    selectedPropertyArray
} : SelectedPropertyArray){
    const isMobile = useMediaQuery({maxWidth: 1000})
   
    const items = getPropertyFeatures(selectedPropertyArray.features)
    

     
    return(
        <div>
            <div className="flex  flex-col w-full  gap-6 ">
                {
                    !isMobile&&
                    <TypeAndPricing typeAndPricing={selectedPropertyArray.typeAndPricing}></TypeAndPricing>
                }

                {
                    !isMobile&&
                    <div className="flex flex-wrap gap-3">
                    {
                        items.slice(0,10).map((items,id)=>(
                            <div key={id} className="flex gap-1 h-fit items-center border-r-1 pr-3 border-[#F0EAF4]">
                        <Image src={items.image} alt="hello" width={0} height={0} className="w-[13px] h-[13px]"></Image>
                        <p className="text-[#4B4B4B] text-[14px] leading-[140%]"><strong>{items.value}</strong> {items.label}</p>
                    </div>
                        ))
                    }
                </div>
                }
            </div>

            <Overview overview={selectedPropertyArray.overview}></Overview>
            <Highlight highlight={selectedPropertyArray.highlights}></Highlight> 
            <FeaturesAndAminities featuresAndAminities={selectedPropertyArray.features}></FeaturesAndAminities>
            
        </div>
    )
}