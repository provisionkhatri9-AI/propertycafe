"use client"
import Image from "next/image"
import Link from "next/link"
import { useMediaQuery } from "react-responsive"

export default function FeaturedPropertyCard({
    widthClass= "w-[80wv]"
}){

    const isMobile = useMediaQuery({maxWidth: 1268})

    return(
        <div className="w-[100%] flex flex-col  max-w-[1025px]">
            <div className={`flex gap-2 ${isMobile ? "w-[87vw]" : widthClass}  pl-2 pb-4 overflow-x-auto hide-scrollbar`}>
                <Link href="/featuredpropertycomponents/propertyDetail">
                    <div className="relative w-[289px] h-[289px] h-fit shadow rounded-xl overflow-hidden flex flex-col flex-none ">
                    <div><Image src = "/featuredproduct1.jpg" alt="helo" width={289} height={172}></Image></div>
                    <div className="absolute inset-0 p-3 flex justify-between w-[100%]">
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
                            <p className="font-bold text-[20px] leading-[24px]">$290,00</p>
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
                                    <strong>4247</strong> sqft
                                </div>
                            </div>

                             <div className="flex items-center gap-1 border-r-1 py-0 border-[#F0EAF4] px-2 -translate-x-2 w-fit">
                                <div>
                                    <Image src="/arrowsquaredash.png" alt="hello" width={14} height={14}></Image>
                                </div>

                                <div className="text-[14px] leading-[24px] text-[#4B4B4B] ">
                                    <strong>4</strong> Bed
                                </div>
                            </div>

                             <div className="flex items-center gap-1 border-r-1 py-0 border-[#F0EAF4] px-2 -translate-x-2 w-fit ">
                                <div>
                                    <Image src="/arrowsquaredash.png" alt="hello" width={14} height={14}></Image>
                                </div>

                                <div className="text-[14px] leading-[24px] text-[#4B4B4B] ">
                                    <strong>2</strong> Bath
                                </div>
                            </div>   

                        </div>
                        <div>
                                <p className="text-[14px] text-[#4B4B4B]">Tourist Hub, Thamel, Kathmandu</p>
                        </div>

                        <div>
                            <p className="text-[10px] text-[#787D9C]">Developer / Posted by owner</p>
                        </div>
                    </div> 
                </div>
                </Link>

                <div className="relative w-[289px] h-[289px] h-fit shadow ml-2 rounded-xl overflow-hidden flex flex-col flex-none ">
                    <div><Image src = "/featuredproduct1.jpg" alt="helo" width={289} height={172}></Image></div>
                    <div className="absolute inset-0 p-3 flex justify-between w-[100%]">
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
                            <p className="font-bold text-[20px] leading-[24px]">$290,00</p>
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
                                    <strong>4247</strong> sqft
                                </div>
                            </div>

                             <div className="flex items-center gap-1 border-r-1 py-0 border-[#F0EAF4] px-2 -translate-x-2 w-fit">
                                <div>
                                    <Image src="/arrowsquaredash.png" alt="hello" width={14} height={14}></Image>
                                </div>

                                <div className="text-[14px] leading-[24px] text-[#4B4B4B] ">
                                    <strong>4</strong> Bed
                                </div>
                            </div>

                             <div className="flex items-center gap-1 border-r-1 py-0 border-[#F0EAF4] px-2 -translate-x-2 w-fit ">
                                <div>
                                    <Image src="/arrowsquaredash.png" alt="hello" width={14} height={14}></Image>
                                </div>

                                <div className="text-[14px] leading-[24px] text-[#4B4B4B] ">
                                    <strong>2</strong> Bath
                                </div>
                            </div>   

                        </div>
                        <div>
                                <p className="text-[14px] text-[#4B4B4B]">Tourist Hub, Thamel, Kathmandu</p>
                        </div>

                        <div>
                            <p className="text-[10px] text-[#787D9C]">Developer / Posted by owner</p>
                        </div>
                    </div> 
                </div>


                <div className="relative w-[289px] h-[289px] h-fit shadow ml-2 rounded-xl overflow-hidden flex flex-col flex-none ">
                    <div><Image src = "/featuredproduct1.jpg" alt="helo" width={289} height={172}></Image></div>
                    <div className="absolute inset-0 p-3 flex justify-between w-[100%]">
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
                            <p className="font-bold text-[20px] leading-[24px]">$290,00</p>
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
                                    <strong>4247</strong> sqft
                                </div>
                            </div>

                             <div className="flex items-center gap-1 border-r-1 py-0 border-[#F0EAF4] px-2 -translate-x-2 w-fit">
                                <div>
                                    <Image src="/arrowsquaredash.png" alt="hello" width={14} height={14}></Image>
                                </div>

                                <div className="text-[14px] leading-[24px] text-[#4B4B4B] ">
                                    <strong>4</strong> Bed
                                </div>
                            </div>

                             <div className="flex items-center gap-1 border-r-1 py-0 border-[#F0EAF4] px-2 -translate-x-2 w-fit ">
                                <div>
                                    <Image src="/arrowsquaredash.png" alt="hello" width={14} height={14}></Image>
                                </div>

                                <div className="text-[14px] leading-[24px] text-[#4B4B4B] ">
                                    <strong>2</strong> Bath
                                </div>
                            </div>   

                        </div>
                        <div>
                                <p className="text-[14px] text-[#4B4B4B]">Tourist Hub, Thamel, Kathmandu</p>
                        </div>

                        <div>
                            <p className="text-[10px] text-[#787D9C]">Developer / Posted by owner</p>
                        </div>
                    </div> 
                </div>

                <div className="relative w-[289px] h-[289px] h-fit shadow ml-2 rounded-xl overflow-hidden flex flex-col flex-none ">
                    <div><Image src = "/featuredproduct1.jpg" alt="helo" width={289} height={172}></Image></div>
                    <div className="absolute inset-0 p-3 flex justify-between w-[100%]">
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
                            <p className="font-bold text-[20px] leading-[24px]">$290,00</p>
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
                                    <strong>4247</strong> sqft
                                </div>
                            </div>

                             <div className="flex items-center gap-1 border-r-1 py-0 border-[#F0EAF4] px-2 -translate-x-2 w-fit">
                                <div>
                                    <Image src="/arrowsquaredash.png" alt="hello" width={14} height={14}></Image>
                                </div>

                                <div className="text-[14px] leading-[24px] text-[#4B4B4B] ">
                                    <strong>4</strong> Bed
                                </div>
                            </div>

                             <div className="flex items-center gap-1 border-r-1 py-0 border-[#F0EAF4] px-2 -translate-x-2 w-fit ">
                                <div>
                                    <Image src="/arrowsquaredash.png" alt="hello" width={14} height={14}></Image>
                                </div>

                                <div className="text-[14px] leading-[24px] text-[#4B4B4B] ">
                                    <strong>2</strong> Bath
                                </div>
                            </div>   

                        </div>
                        <div>
                                <p className="text-[14px] text-[#4B4B4B]">Tourist Hub, Thamel, Kathmandu</p>
                        </div>

                        <div>
                            <p className="text-[10px] text-[#787D9C]">Developer / Posted by owner</p>
                        </div>
                    </div> 
                </div>

                

            </div>
        </div>
    )
}