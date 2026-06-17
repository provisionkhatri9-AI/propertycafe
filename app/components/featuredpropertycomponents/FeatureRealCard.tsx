import Image from "next/image"
import Link from "next/link"
import RealCard from "../homecomponents/explorepropertycomponents/RealCard";

interface Property {
  image: string;
  tag: string;
  price: string;
  sqft: number;
  beds: number;
  baths: number;
  location: string;
  postedBy: string;
}

interface RealCard {
    property: Property
}

export default function FeatureRealCard({
    property,
}: RealCard){
    return(
        <div className="w-full py-2 ">
            <Link href="/components/featuredpropertycomponents/propertyDetail" className="group " >
                            <div className="relative w-[289px] h-[289px] h-fit shadow rounded-xl overflow-hidden flex flex-col flex-none group-hover:-translate-y-[2px] transition-all duration-300 ">
                            <div className=""><Image src = {property.image} alt="helo" width={289} height={172} className=" w-full h-[172px] group-hover:scale-103 transition-all duration-300 " unoptimized></Image></div>
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
                                    <div className="flex items-center gap-1 border-r-1  border-[#F0EAF4] px-2 -translate-x-2 w-fit">
                                        <div>
                                            <Image src="/arrowsquaredash.png" alt="hello" width={14} height={14}></Image>
                                        </div>
        
                                        <div className="text-[14px] leading-[24px] text-[#4B4B4B] ">
                                            <strong>{property.sqft}</strong> sqft
                                        </div>
                                    </div>
        
                                     <div className="flex items-center gap-1 border-r-1 py-0 border-[#F0EAF4] px-2 -translate-x-2 w-fit">
                                        <div>
                                            <Image src="/bed.png" alt="hello" width={14} height={14}></Image>
                                        </div>
        
                                        <div className="text-[14px] leading-[24px] text-[#4B4B4B] ">
                                            <strong>{property.beds}</strong> Bed
                                        </div>
                                    </div>
        
                                     <div className="flex items-center gap-1 border-r-1 py-0 border-[#F0EAF4] px-2 -translate-x-2 w-fit ">
                                        <div>
                                            <Image src="/bath.png" alt="hello" width={14} height={14}></Image>
                                        </div>
        
                                        <div className="text-[14px] leading-[24px] text-[#4B4B4B] ">
                                            <strong>{property.baths}</strong> Bath
                                        </div>
                                    </div>   
        
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