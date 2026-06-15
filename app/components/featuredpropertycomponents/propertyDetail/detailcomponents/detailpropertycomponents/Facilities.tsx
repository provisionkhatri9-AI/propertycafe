import Image from "next/image"
import { useMediaQuery } from "react-responsive"
export default function Facilities(){

    const isMobile = useMediaQuery({maxWidth: 767})
    return(
        <div className="flex flex-col gap-4">
            <div>
                <p className="text-[#4B4B4B]  font-semibold text-[18px] leading-[140%]">Features and Aminities</p>
            </div>

            <div className="flex gap-[12px]  max-h-[285px] overflow-y-auto  ">
                <div className="flex gap-5 flex-wrap">
                    <div className="w-[155px] flex gap-5">
                        <div className="w-[40px] h-[40px] rounded-md border-[0.5px] border-[#6A3093] flex items-center justify-center">
                        <Image src="/bed.png" alt="hello" width={0} height={0} className="w-[20px] h-[20px] "></Image>
                            </div>
                            <div className="flex flex-col gap3">
                                <p className="font-semibold text-[16px] leading-[140%] text-[#4B4B4B]">3</p>
                                <p className="text-[14px] text-[#757575]">Bedroom</p>
                        </div>
                    </div>
                    <div className="w-[155px] flex gap-5">
                        <div className="w-[40px] h-[40px] rounded-md border-[0.5px] border-[#6A3093] flex items-center justify-center">
                        <Image src="/balcony.png" alt="hello" width={0} height={0} className="w-[20px] h-[20px] "></Image>
                            </div>
                            <div className="flex flex-col gap3">
                                <p className="font-semibold text-[16px] leading-[140%] text-[#4B4B4B]">3</p>
                                <p className="text-[14px] text-[#757575]">Balcony</p>
                        </div>
                    </div>

                    <div className="w-[155px] flex gap-5">
                        <div className="w-[40px] h-[40px] rounded-md border-[0.5px] border-[#6A3093] flex items-center justify-center">
                        <Image src="/parking.png" alt="hello" width={0} height={0} className="w-[20px] h-[20px] "></Image>
                            </div>
                            <div className="flex flex-col gap3">
                                <p className="font-semibold text-[16px] leading-[140%] text-[#4B4B4B]">3</p>
                                <p className="text-[14px] text-[#757575]">Parking</p>
                        </div>
                    </div>
                    <div className="w-[155px] flex gap-5">
                        <div className="w-[40px] h-[40px] rounded-md border-[0.5px] border-[#6A3093] flex items-center justify-center">
                        <Image src="/kitchen.png" alt="hello" width={0} height={0} className="w-[20px] h-[20px] "></Image>
                            </div>
                            <div className="flex flex-col gap3">
                                <p className="font-semibold text-[16px] leading-[140%] text-[#4B4B4B]">3</p>
                                <p className="text-[14px] text-[#757575]">Kitchen</p>
                        </div>
                    </div>

                    <div className="w-[155px] flex gap-5">
                        <div className="w-[40px] h-[40px] rounded-md border-[0.5px] border-[#6A3093] flex items-center justify-center">
                        <Image src="/bath.png" alt="hello" width={0} height={0} className="w-[20px] h-[20px] "></Image>
                            </div>
                            <div className="flex flex-col gap3">
                                <p className="font-semibold text-[16px] leading-[140%] text-[#4B4B4B]">3</p>
                                <p className="text-[14px] text-[#757575]">Bathroom</p>
                        </div>
                    </div>

                     <div className="w-[155px] flex gap-5">
                        <div className="w-[40px] h-[40px] rounded-md border-[0.5px] border-[#6A3093] flex items-center justify-center">
                        <Image src="/bath.png" alt="hello" width={0} height={0} className="w-[20px] h-[20px] "></Image>
                            </div>
                            <div className="flex flex-col gap3">
                                <p className="font-semibold text-[16px] leading-[140%] text-[#4B4B4B]">3</p>
                                <p className="text-[14px] text-[#757575]">Bathroom</p>
                        </div>
                    </div>

                     <div className="w-[155px] flex gap-5">
                        <div className="w-[40px] h-[40px] rounded-md border-[0.5px] border-[#6A3093] flex items-center justify-center">
                        <Image src="/bath.png" alt="hello" width={0} height={0} className="w-[20px] h-[20px] "></Image>
                            </div>
                            <div className="flex flex-col gap3">
                                <p className="font-semibold text-[16px] leading-[140%] text-[#4B4B4B]">3</p>
                                <p className="text-[14px] text-[#757575]">Bathroom</p>
                        </div>
                    </div>

                     <div className="w-[155px] flex gap-5">
                        <div className="w-[40px] h-[40px] rounded-md border-[0.5px] border-[#6A3093] flex items-center justify-center">
                        <Image src="/bath.png" alt="hello" width={0} height={0} className="w-[20px] h-[20px] "></Image>
                            </div>
                            <div className="flex flex-col gap3">
                                <p className="font-semibold text-[16px] leading-[140%] text-[#4B4B4B]">3</p>
                                <p className="text-[14px] text-[#757575]">Bathroom</p>
                        </div>
                    </div>

                     <div className="w-[155px] flex gap-5">
                        <div className="w-[40px] h-[40px] rounded-md border-[0.5px] border-[#6A3093] flex items-center justify-center">
                        <Image src="/bath.png" alt="hello" width={0} height={0} className="w-[20px] h-[20px] "></Image>
                            </div>
                            <div className="flex flex-col gap3">
                                <p className="font-semibold text-[16px] leading-[140%] text-[#4B4B4B]">3</p>
                                <p className="text-[14px] text-[#757575]">Bathroom</p>
                        </div>
                    </div>

                     <div className="w-[155px] flex gap-5">
                        <div className="w-[40px] h-[40px] rounded-md border-[0.5px] border-[#6A3093] flex items-center justify-center">
                        <Image src="/bath.png" alt="hello" width={0} height={0} className="w-[20px] h-[20px] "></Image>
                            </div>
                            <div className="flex flex-col gap3">
                                <p className="font-semibold text-[16px] leading-[140%] text-[#4B4B4B]">3</p>
                                <p className="text-[14px] text-[#757575]">Bathroom</p>
                        </div>
                    </div>

                     <div className="w-[155px] flex gap-5">
                        <div className="w-[40px] h-[40px] rounded-md border-[0.5px] border-[#6A3093] flex items-center justify-center">
                        <Image src="/bath.png" alt="hello" width={0} height={0} className="w-[20px] h-[20px] "></Image>
                            </div>
                            <div className="flex flex-col gap3">
                                <p className="font-semibold text-[16px] leading-[140%] text-[#4B4B4B]">3</p>
                                <p className="text-[14px] text-[#757575]">Bathroom</p>
                        </div>
                    </div>

                     <div className="w-[155px] flex gap-5">
                        <div className="w-[40px] h-[40px] rounded-md border-[0.5px] border-[#6A3093] flex items-center justify-center">
                        <Image src="/bath.png" alt="hello" width={0} height={0} className="w-[20px] h-[20px] "></Image>
                            </div>
                            <div className="flex flex-col gap3">
                                <p className="font-semibold text-[16px] leading-[140%] text-[#4B4B4B]">3</p>
                                <p className="text-[14px] text-[#757575]">Bathroom</p>
                        </div>
                    </div>
                    
                
                </div>
            </div>

            {
                        !isMobile&&
                        <div className="mt-6 gap-2 flex flex-col">
                        <div>
                                <p  className="text-[#4B4B4B] font-semibold text-[18px] leading-[140%]">Price</p>
                        </div>
                        <div>
                                <p className="text-[16px] leading-[140%]">2.2Cr - 2.5Cr</p>
                        </div>
                        </div>
                    }
        </div>
    )
}