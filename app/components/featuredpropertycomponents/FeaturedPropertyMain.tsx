import Image from "next/image";
import FeaturedPropertyCard from "./FeaturedPropertyCard";

export default function FeaturedPropertyMain(){
    return(
        <div className="w-[100%] mb-[40px] relative mt-[40px]">
            <div className="flex w-full justify-between items-center mb-4">
                <div>
                    <p className="leading-[38px] font-semibold text-[#111116] text-[clamp(1.3rem,2vw,2rem)]">Featured Property</p>
                    <p className="text-[14px] leading-[140%] text-[#787D9C]">Top searches of this week</p>
                </div>

                <div>
                    <p className="text-[clamp(0.85rem,4vw,1rem)] leading-[140%] text-[#F0A300] font-semibold">See all</p>
                </div>
            </div>

            <div className="w-full">
                <FeaturedPropertyCard ></FeaturedPropertyCard>
            </div>

            <div className="absolute sm:right-[-17px] top-1/2 right-[-14px] border-2  w-fit h-fit border-[2px] overflow-hidden z-[200] border-white rounded-full  right-0">
                                <div className="bg-gradient-to-b from-[#FFFFFF1C] to-[#0000000A] backdrop-blur-2xl z-[200] px-1 py-1">
                                    <div className="px-2 py-2 bg-white rounded-full">
                                        <Image src="/downarrow.png" alt="hello" width={0} height={0} className="rotate-270 w-[10px] h-[10px]"></Image>
                                    </div>
                                </div>
                            </div>

            
        </div>
    )
}