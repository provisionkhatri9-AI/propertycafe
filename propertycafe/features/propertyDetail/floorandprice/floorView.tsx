import Image from "next/image"
import type { Property } from "@/type/DetailPageType"

type TypeAndPricingType={
    selectedArray : Property
}
export default function FloorView({
    selectedArray
} : TypeAndPricingType){
    return(
        <div className="relative hidden md:block w-full ">
                        <div>
                            <p className="text-[#9D98A0] text-[16px] leading-[140%]">{selectedArray.typeAndPricing.type}</p>
                            <p className="font-semibold text-[18px] text-[#111116] leading-[140%]"><span className="mr-2">रु</span>{selectedArray.priceAndFloor[0].price}</p>
                        </div>
                        <div className="absolute top-0 right-0 flex flex-col hidden md:flex gap-3">
                            <div className="flex items-center justify-center border-[1px] border-[#F0F2FC] shadow rounded-2xl px-3 py-2 cursor-pointer">
                                <div className="bg-[#FEF6E6] px-5 py-1.5 rounded-xl">
                                    <p className="font-semibold text-[#F0A300] text-[16px] leading-[140%]">3D</p>
                                </div>
                                <div className=" px-5 py-1.5 rounded-xl">
                                    <p className="font-semibold text-[#9D98A0] text-[16px] leading-[140%]">2D</p>
                                </div> 
                            </div>
        
                            <div className="flex items-center bg-white  justify-center border-[1px] border-[#F0F2FC] shadow rounded-2xl px-1 py-1 cursor-pointer">
                                <div className=" px-1 py-1.5 rounded-xl  h-[40px] w-[35px]">
                                    <Image src="/rot1.png" alt="hello" width={30} height={30} className="w-full h-full" ></Image>
                                </div>
                                <div className="  px-1 py-1.5 rounded-xl">
                                    <p className="font-semibold text-[#9D98A0] text-[16px] leading-[140%]">Rotate</p>
                                </div> 
                                <div className=" px-1py-1.5 rounded-xl h-[17px] w-[17px]">
                                    <Image src="/rot2.png" alt="hello" width={10} height={10} className="w-full h-full"></Image>
                                </div>
                            </div>
        
                            <div className="flex items-center gap-1 bg-white  justify-center border-[1px] border-[#F0F2FC] shadow rounded-2xl px-1 py-1">
                                <div className=" px-1 py-1.5 rounded-xl">
                                    <Image src="/mag2.png" alt="hello" width={20} height={20} className="w-full h-full" ></Image>
                                </div>
                                <div className="  px-1 py-1.5 rounded-xl">
                                    <p className="font-semibold text-[#9D98A0] text-[16px] leading-[140%]">100%</p>
                                </div> 
                                <div className=" px-1py-1.5 rounded-xl">
                                    <Image src="/mag1.png" alt="hello" width={20} height={20} className="w-full h-full" ></Image>
                                </div>
                            </div>
                            
                        </div>
                    </div> 
    )
}