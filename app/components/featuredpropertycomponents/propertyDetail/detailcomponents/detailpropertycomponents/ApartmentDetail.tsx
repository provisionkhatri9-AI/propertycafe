import { useMediaQuery } from "react-responsive"
import Image from "next/image"
import Bhkanna from "../2bkanna"
export default function ApartmentDetail(){
    const isMobile = useMediaQuery({maxWidth: 1000})
    return(
        <div className="flex  flex-col w-full  gap-6 ">
                {
                    !isMobile&&
                    <Bhkanna></Bhkanna>
                }

                {
                    !isMobile&&
                    <div className="flex flex-wrap gap-3">
                    <div className="flex gap-1 h-fit items-center border-r-1 pr-3 border-[#F0EAF4]">
                        <Image src="/arrowsquaredash.png" alt="hello" width={0} height={0} className="w-[13px] h-[13px]"></Image>
                        <p className="text-[#4B4B4B] text-[14px] leading-[140%]"><strong>46.93</strong> k/anna</p>
                    </div>
                    <div className="flex gap-1 h-fit items-center border-r-1 pr-3 border-[#F0EAF4]">
                        <Image src="/arrowsquaredash.png" alt="hello" width={0} height={0} className="w-[13px] h-[13px]"></Image>
                        <p className="text-[#4B4B4B] text-[14px] leading-[140%]"><strong>4.76</strong>anna</p>
                    </div>
                    <div className="flex gap-1 h-fit items-center border-r-1 pr-3 border-[#F0EAF4]">
                        <Image src="/bed.png" alt="hello" width={0} height={0} className="w-[13px] h-[13px]"></Image>
                        <p className="text-[#4B4B4B] text-[14px] leading-[140%]"><strong>4</strong> Bed</p>
                    </div>
                    <div className="flex gap-1 h-fit items-center border-r-1 pr-3 border-[#F0EAF4]">
                        <Image src="/kitchen.png" alt="hello" width={0} height={0} className="w-[13px] h-[13px]"></Image>
                        <p className="text-[#4B4B4B] text-[14px] leading-[140%]"><strong>2</strong> Kitchen</p>
                    </div>
                    <div className="flex gap-1 h-fit items-center border-r-1 pr-3 border-[#F0EAF4]">
                        <Image src="/compas.png" alt="hello" width={0} height={0} className="w-[13px] h-[13px]"></Image>
                        <p className="text-[#4B4B4B] text-[14px] leading-[140%]"><strong></strong> South East</p>
                    </div>
                    <div className="flex gap-1 h-fit items-center border-r-1 pr-3 border-[#F0EAF4]">
                        <Image src="/livingroom.png" alt="hello" width={0} height={0} className="w-[13px] h-[13px]"></Image>
                        <p className="text-[#4B4B4B] text-[14px] leading-[140%]"><strong>1</strong> Living Room</p>
                    </div>
                    <div className="flex gap-1 h-fit items-center border-r-1 pr-3 border-[#F0EAF4]">
                        <Image src="/floor.png" alt="hello" width={0} height={0} className="w-[13px] h-[13px]"></Image>
                        <p className="text-[#4B4B4B] text-[14px] leading-[140%]"><strong>3</strong> Floors</p>
                    </div>
                    <div className="flex gap-1 h-fit items-center border-r-1 pr-3 border-[#F0EAF4]">
                        <Image src="/balcony.png" alt="hello" width={0} height={0} className="w-[13px] h-[13px]"></Image>
                        <p className="text-[#4B4B4B] text-[14px] leading-[140%]"><strong>3</strong> Balconies</p>
                    </div>
                    <div className="flex gap-1 h-fit items-center border-r-1 pr-3 border-[#F0EAF4]">
                        <Image src="/parking.png" alt="hello" width={0} height={0} className="w-[13px] h-[13px]"></Image>
                        <p className="text-[#4B4B4B] text-[14px] leading-[140%]"><strong>2</strong> Parkings</p>
                    </div>
                    <div className="flex gap-1 h-fit items-center border-r-1 pr-3 border-[#F0EAF4]">
                        <Image src="/bath.png" alt="hello" width={0} height={0} className="w-[13px] h-[13px]"></Image>
                        <p className="text-[#4B4B4B] text-[14px] leading-[140%]"><strong>2</strong> Baths</p>
                    </div>
                </div>
                }
            </div>
    )
}