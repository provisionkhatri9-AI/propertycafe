import { useMediaQuery } from "react-responsive"
import Image from "next/image"
import Bhkanna from "../2bkanna"
import { useSelector } from "react-redux"
import { RootState } from "@/app/store/store"
import { getPropertyFeatures } from "@/utils/propertyFeatures"


export default function ApartmentDetail(){
    const isMobile = useMediaQuery({maxWidth: 1000})
    const property = useSelector(
        (state:RootState) => state.detailPage.properties.find(
            (p) => p.id === state.detailPage.selectedId
        )
    )

    if(!property) return <p>error</p>
    const items = getPropertyFeatures(property.features)
    

     
    return(
        <div className="flex  flex-col w-full  gap-6 ">
                {
                    !isMobile&&
                    <Bhkanna ></Bhkanna>
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
    )
}