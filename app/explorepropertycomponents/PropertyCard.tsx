import { useMediaQuery } from "react-responsive"
import Image from "next/image"

export default function ExplorePropertyCard(){

    const isMobile = useMediaQuery({maxWidth:1267})


    return(
        <div className="flex  items-center w-[100%]  ">
            <div className={`flex gap-5 overflow-x-auto   ${isMobile? "w-[90vw]" : "w-[80vw]" }`}>

            <div className="  rounded-[12px] min-w-[220px] min-h-[200px]  overflow-hidden ">
                    <div className="relative  ">
                    
                        <Image src="/propertybuilding1.jpg" alt="hekko" width={0} height={0} className="w-[333px] h-[250px] "  unoptimized></Image>

                        <div className="absolute bg-black/20 h-full w-full inset-0  z-10"></div>
                    

                    <div className="flex w-[90%] justify-between py-3 px-2 absolute z-20 bottom-4 bg-white rounded-xl left-1/2 -translate-x-1/2">
                        <div className="flex flex-col">
                            <p className={`leading-[140%] ${isMobile? "text-[12px]" : "text-[14px]"} font-medium`}>Prime Rental Space For Rent</p>
                            <p className={`leading-[140%] ${isMobile? "text-[10px]" : "text-[12px]"}  text-[#787D9C]`}>FIrst</p>
                        </div>

                        <div className={`bg-[#F0EAF4] flex items-center justify-center rounded-full border-[0.5px] border-[#D1BFDE] ${isMobile? "h-[24px] w-[24px]" : "h-[34px] w-[34px]"}`}>
                            <img src="/updiagarrow1.png" alt="" className="h-4 w-3" />
                        </div>
                    </div>

                    <div className="absolute inset-0 top-5 left-5 z-20">
                        <div className="bg-[#6A7FDB] px-[12px] py-[4px] w-fit rounded-[8px]">
                            <p className="text-[12px] text-white">Commercial</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="  rounded-[12px] min-w-[220px] min-h-[200px]  overflow-hidden ">
                    <div className="relative  ">
                    
                        <Image src="/propertybuilding2.jpg" alt="hekko" width={0} height={0} className="w-[333px] h-[250px] "  unoptimized></Image>

                        <div className="absolute bg-black/20 h-full w-full inset-0  z-10"></div>
                    

                    <div className="flex w-[90%] justify-between py-3 px-2 absolute z-20 bottom-4 bg-white rounded-xl left-1/2 -translate-x-1/2">
                        <div className="flex flex-col">
                            <p className={`leading-[140%] ${isMobile? "text-[12px]" : "text-[14px]"} font-medium`}>Prime Rental Space For Rent</p>
                            <p className={`leading-[140%] ${isMobile? "text-[10px]" : "text-[12px]"}  text-[#787D9C]`}>FIrst</p>
                        </div>

                        <div className={`bg-[#F0EAF4] flex items-center justify-center rounded-full border-[0.5px] border-[#D1BFDE] ${isMobile? "h-[24px] w-[24px]" : "h-[34px] w-[34px]"}`}>
                            <img src="/updiagarrow1.png" alt="" className="h-4 w-3" />
                        </div>
                    </div>

                    <div className="absolute inset-0 top-5 left-5 z-20">
                        <div className="bg-[#6A7FDB] px-[12px] py-[4px] w-fit rounded-[8px]">
                            <p className="text-[12px] text-white">Commercial</p>
                        </div>

                    </div>
                </div>

                
            </div>

             <div className="  rounded-[12px] min-w-[220px] min-h-[200px]  overflow-hidden ">
                    <div className="relative  ">
                    
                        <Image src="/propertybuilding3.jpg" alt="hekko" width={0} height={0} className="w-[333px] h-[250px] "  unoptimized></Image>

                        <div className="absolute bg-black/20 h-full w-full inset-0  z-10"></div>
                    

                    <div className="flex w-[90%] justify-between py-3 px-2 absolute z-20 bottom-4 bg-white rounded-xl left-1/2 -translate-x-1/2">
                        <div className="flex flex-col">
                            <p className={`leading-[140%] ${isMobile? "text-[12px]" : "text-[14px]"} font-medium`}>Prime Rental Space For Rent</p>
                            <p className={`leading-[140%] ${isMobile? "text-[10px]" : "text-[12px]"}  text-[#787D9C]`}>FIrst</p>
                        </div>

                        <div className={`bg-[#F0EAF4] flex items-center justify-center rounded-full border-[0.5px] border-[#D1BFDE] ${isMobile? "h-[24px] w-[24px]" : "h-[34px] w-[34px]"}`}>
                            <img src="/updiagarrow1.png" alt="" className="h-4 w-3" />
                        </div>
                    </div>

                    <div className="absolute inset-0 top-5 left-5 z-20">
                        <div className="bg-[#6A7FDB] px-[12px] py-[4px] w-fit rounded-[8px]">
                            <p className="text-[12px] text-white">Commercial</p>
                        </div>

                    </div>
                </div>

                
            </div>

             <div className="  rounded-[12px] min-w-[220px] min-h-[200px]  overflow-hidden ">
                    <div className="relative  ">
                    
                        <Image src="/propertybuilding4.jpg" alt="hekko" width={0} height={0} className="w-[333px] h-[250px] "  unoptimized></Image>

                        <div className="absolute bg-black/20 h-full w-full inset-0  z-10"></div>
                    

                    <div className="flex w-[90%] justify-between py-3 px-2 absolute z-20 bottom-4 bg-white rounded-xl left-1/2 -translate-x-1/2">
                        <div className="flex flex-col">
                            <p className={`leading-[140%] ${isMobile? "text-[12px]" : "text-[14px]"} font-medium`}>Prime Rental Space For Rent</p>
                            <p className={`leading-[140%] ${isMobile? "text-[10px]" : "text-[12px]"}  text-[#787D9C]`}>FIrst</p>
                        </div>

                        <div className={`bg-[#F0EAF4] flex items-center justify-center rounded-full border-[0.5px] border-[#D1BFDE] ${isMobile? "h-[24px] w-[24px]" : "h-[34px] w-[34px]"}`}>
                            <img src="/updiagarrow1.png" alt="" className="h-4 w-3" />
                        </div>
                    </div>

                    <div className="absolute inset-0 top-5 left-5 z-20">
                        <div className="bg-[#6A7FDB] px-[12px] py-[4px] w-fit rounded-[8px]">
                            <p className="text-[12px] text-white">Commercial</p>
                        </div>

                    </div>
                </div>

                
            </div>
        </div>
        </div>
    )
}