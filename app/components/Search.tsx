"use client"

import { useMediaQuery } from "react-responsive"

export default function SearchComp(){

    const isMobile = useMediaQuery({maxWidth:767})

    return(
        <div className="relative h-[147px]  flex flex-col  justify-end">
            <div className=" absolute flex items-center justify-center  h-[55px]  inset-0 top-[-27px]">
                <div className={` ${isMobile? "w-[230px] gap-2" : "w-[320px]  gap-5"} transition-all duration-300  flex items-center justify-center bg-[#7230B5]  rounded-t-xl rounded-b-3xl h-full`}>
                    <div className="flex text-white flex-col items-center gap-1">
                        <p className="text-[15px] leading-[140%]">Buy</p>
                        <div className="h-[2px] rounded-xl  w-full bg-white "></div>
                    </div>
                    <div className="flex text-white flex-col items-center gap-1">
                        <p className="text-[15px] leading-[140%]">Rent</p>
                        <div className="h-[2px] text-white rounded-xl  w-full bg-white"></div>
                    </div>
                    <div className="flex text-white flex-col items-center gap-1">
                        <p className="text-[15px] leading-[140%]">Land</p>
                        <div className="h-[2px] rounded-xl  w-full bg-white"></div>
                    </div>
                    <div className="flex text-white flex-col items-center gap-1">
                        <p className="text-[15px] leading-[140%]">Commericial</p>
                        <div className="h-[2px] rounded-xl  w-full bg-white"></div>
                    </div>
                </div>
            </div>
            <div className="h-[141px] flex flex-col justify-center items-center  w-full rounded-[50px] bg-gradient-to-b from-white/50 via-white/60 via-[15%] to-[#B192C7]">

                <div className="w-[80%] flex flex-col gap-3">
                    <div className="flex justify-between   rounded-3xl bg-white px-6 py-3">
                            <div className="flex items-center gap-3 whitespace-nowrap">
                        {!isMobile && (
                            <p className="text-[14px] leading-xl">Select City</p>
                        )}
                        <div>
                            <img src="/downarrow.png" alt="" className="w-3 h-3"/>
                        </div>
                    </div>

                    <div className="flex-1 h-full border-l-[1px] border-[#F0EAF4]  ml-2">

                        <input type="text" placeholder="Search for Locality, landmarks or projects" className="w-full h-full p-2 outline-none placeholder-gray-400 placeholder:text-[14px]" />

                    </div>

                    <div className="flex items-center justify-center bg-[#F0A300] rounded-xl px-3 py-1">

                        {!isMobile&&(
                            <p className="text-white text-[14px]">Search</p>
                        )}

                        {
                            isMobile &&(
                                <img src="/searchicon.png" alt="" className="w-5 h-5" />
                            )
                        }

                    </div>
                    </div>


                    <div >
                    <div className="flex gap-3 items-center ml-[7px]">
                        <div><p className="font-semibold text-white text-[14px] ">Recent Searches : </p></div>
                        <div className="bg-[#923EE852] px-2 py-1 rounded-md flex items-center justify-center"><p className="text-[12px]">Lalitpur</p></div>
                        <div><p>Kathmandu</p></div>
                        <div><img src="/downarrow.png" className="rotate-270 h-2 w-2" alt="" /></div>
                    </div>
                </div>
                </div>
                

            </div>
        </div>
    )
}