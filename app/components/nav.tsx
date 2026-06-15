"use client"
import { useState,useEffect } from "react"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"

export default function NavBar(){
    const [mounted, setMounted] = useState(false)
    
    useEffect(()=>{
        setMounted(true)
    },[])

    const medium = useMediaQuery({maxWidth:900})
    const isMobile = useMediaQuery({maxWidth: 767})

    if (!mounted) return null
    return(
        <div className={`flex  w-[95vw]  ${isMobile? "pl-3 transition-all duration-300": "pl-16"} `}>
            <div className="flex w-full justify-between  items-center h-[80.94px]  ">
                <div className="w-fit height-fit">
                    <Image src="/logohome.png" alt="hello" width={95} height={53}/>
                </div>

                {
                    !medium &&(
                        <div className="flex gap-[14px]">
                            <p className="text-[#4B4B4B] text-[16px]">Luxury</p>
                            <p className="text-[#4B4B4B]">International</p>
                            <p className="text-[#4B4B4B]">Construction</p>
                            <p className="text-[#4B4B4B]">Home</p>
                            <p className="text-[#4B4B4B]">Loan</p>
                            <p className="text-[#4B4B4B]">Interiors</p>
                        </div>
                    )
                }

                <div className="flex w-fit h-fit gap-[16px]">
                    {!medium&&(
                        <div className="bg-gradient-to-l from-[#A044FF] to-[#6A3093] flex items-center   rounded-[8px] p-[10px]">
                            <p className=" w-[115px] h-[20px] font-semibold text-[16px] leading-[22px] flex items-center justify-center">Post Property</p>
                        </div>
                    )}
                <div className=" bg-gradient-to-l from-[#A044FF] to-[#6A3093] p-[2px]  rounded-[12px] ">
                    <div className=" p-[10px] bg-white rounded-[10px]">
                        <div className={ " font-semibold text-[16px] leading-[22px] w-[58px] h-[20px] text-[#6A3093] flex items-center justify-center"}>
                             Sign Up
                        </div>
                        
                    </div>
                </div>

                {medium&&(
                            <div className="flex justify-center items-center">
                                <img src="/hamburgericon.png" alt="" className="h-8 w-8 mr-5" />
                            </div>
                        )}
                

            </div>

            </div>
        </div>

    )
}