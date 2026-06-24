import Image from "next/image"
import Link from "next/link"
import type { SharedBoxCardType } from "../../type/sharedBoxCardType";
import { useDispatch } from "react-redux";
import { featureImageIcon } from "@/data/featureCardData";
import { setSelectedId } from "@/features/propertyDetail/slices/DetailPageSlice";

type FeatureRealCardProps = {
  property: SharedBoxCardType;
};

export default function SliderBoxCard({
    property,
}: FeatureRealCardProps){

    const dispatch = useDispatch()
    return(
        <div className="w-full py-2 ">
            <Link href="/propertyDetail" className="group " onClick={()=>dispatch(setSelectedId(property.id))} >
                            <div className="relative w-[281px] h-[289px] h-fit shadow rounded-xl overflow-hidden flex flex-col flex-none group-hover:-translate-y-[2px] transition-all duration-300 ">
                            <div className="w-full h-[172px]"><Image src = {property.image} alt="helo" width={299} height={0} className="w-full h-full group-hover:scale-103 transition-all duration-300 "></Image></div>
                            <div className="absolute inset-0 p-4 flex justify-between w-[100%]">
                                <div className="bg-[#6A7FDB] px-[8px] rounded-md flex items-center justify-center py-[4px] h-fit ">
                                    <p className="text-[12px] ">Tag</p>
                                </div>
                                <div>
                                    <div>
                                        <Image src="/love.png" alt="hello" width={20} height={20}></Image>
                                    </div>
                                </div>
                            </div>
        
                            <div className="p-2 w-full flex flex-col ">
                            <div className="flex justify-between w-full mb-2 ">
                                <div>
                                    <p className="font-bold text-[20px] leading-[24px]">{property.price}</p>
                                </div>
                                <div className="px-2 py-1 bg-[#F6ECFF] rounded-xl">
                                    <p className="text-[10px] text-[#A044FF] ">Home Loan Available</p>
                                </div>
                                </div>
        
                                <div className="flex ">
                                    {   
                                        
                                        featureImageIcon.map((item,id)=>{
                                        return(
                                            
                                        <div key={id} className="flex items-center gap-1 border-r-1  border-[#F0EAF4] px-2 -translate-x-2 w-fit">
                                        <div className="w-[14px] h-[14px]">
                                            <Image src={item.image} alt="hello" width={14} height={14} className="w-full h-full"></Image>
                                        </div>
        
                                        <div className="text-[14px] leading-[24px] text-[#4B4B4B] ">
                                            <strong>{property[item.value]}</strong> {item.lable}
                                        </div>
                                    </div>
                                        )
                                        })
                                    }
        
                                </div>
                                <div>
                                        <p className="text-[14px] leading-[24px] text-[#4B4B4B]">{property.location}</p>
                                </div>
        
                                <div>
                                    <p className="text-[10px] text-[#787D9C]">{property.postedBy}</p>
                                </div>
                            </div> 
                        </div>
                        </Link>
        </div>
    )
}