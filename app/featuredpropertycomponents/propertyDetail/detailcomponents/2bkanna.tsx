import Image from "next/image"
import { useMediaQuery } from "react-responsive"
export default function Bhkanna(){
    const isMobile = useMediaQuery({maxWidth: 1000})
    return(
        <div className={`flex flex-col  w-full  ${isMobile ? "gap-2" : "gap-6"}`}>
            <div className="px-2 w-fit rounded-xl py-1 bg-[#E7EDFF]">
                                <p className="text-[#5379FF] text-[14px] leading-[140%]">2BHK Apartment</p>
                            </div>
            
                            <div className={`flex justify-between  whitespace-nowrap w-full ${isMobile? "gap-7": "gap-20"}`}>
                                <div className={` border-r-1 w-full  border-[#F0EAF4] `}>
                                    <div className="flex items-center w-full self-start  gap-1">
                                        <p className="font-semibold text-[clamp(0.9rem,4vw,1rem)] leading-[140%]">3-4 anna</p>
                                        <Image src="/downarrow.png" alt="hello" width={0} height={0} className="w-[11px] h-[11px]"></Image>
                                    </div>
                                    <p className="text-[#9D98A0] leading-[140%] text-[14px]">Area</p>
                                </div>
            
                                <div className="border-r-1 w-full    border-[#F0EAF4]">
                                    <div className="flex items-center  gap-1">
                                        <p className="font-semibold text-[clamp(0.9rem,4vw,1rem)] leading-[140%]">Rs. 40K/aana</p>
                                        <Image src="/downarrow.png" alt="hello" width={0} height={0} className="w-[11px] h-[11px]"></Image>
                                    </div>
                                    <p className="text-[#9D98A0] leading-[140%] text-[14px]">Average Rate</p>
                                </div>
            
                                <div className="w-full  border-[#F0EAF4]">
                                    <div className="flex items-center gap-1">
                                        <p className="font-semibold text-[clamp(0.9rem,4vw,1rem)] leading-[140%]">Ready To Move</p>
                                        <Image src="/downarrow.png" alt="hello" width={0} height={0} className="w-[11px] h-[11px]"></Image>
                                    </div>
                                    <p className="text-[#9D98A0] leading-[140%] text-[14px]">Posession Status</p>
                                </div>
                            </div>
        </div>
    )
}