"use client"
import { useState,useEffect } from "react"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"
import Link from "next/link"

export default function NavBar(){
    const [mounted, setMounted] = useState(false)
    
   useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
}, []);


    const medium = useMediaQuery({maxWidth:900})
    const isMobile = useMediaQuery({maxWidth: 767})

    if (!mounted) return null
    return(
        <div className={`flex  w-[95vw]  ${isMobile? "pl-3 transition-all duration-300": "pl-14"} `}>
            <div className="flex w-full justify-between  items-center h-[80.94px]  ">
                <Link href="/">
                <div className="w-fit height-fit cursor-pointer">
                    <Image src="/logohome.png" alt="hello" width={0} height={0} className="w-[85px] h-[62px]" unoptimized/>
                </div>
                </Link>

                {
                    !medium &&(
                        <div className="flex gap-[14px]">
                            <p className="text-[#4B4B4B] text-[16px]  hover:-translate-y-[3px]   cursor-pointer hover:scale-102 hover:text-[#6A3093] transition-all duration-300">Luxury</p>
                            <p className="text-[#4B4B4B] text-[16px]  hover:-translate-y-[3px]  hover:scale-102 hover:text-[#6A3093]  transition-all duration-300  cursor-pointer">International</p>
                            <p className="text-[#4B4B4B] text-[16px]  hover:-translate-y-[3px]  hover:scale-102 hover:text-[#6A3093] transition-all duration-300 cursor-pointer">Construction</p>
                            <p className="text-[#4B4B4B] text-[16px]  hover:-translate-y-[3px]  hover:scale-102 hover:text-[#6A3093] transition-all duration-300 cursor-pointer">Home</p>
                            <p className="text-[#4B4B4B] text-[16px]  hover:-translate-y-[3px]  hover:scale-102 hover:text-[#6A3093] transition-all duration-300 cursor-pointer">Loan</p>
                            <p className="text-[#4B4B4B] text-[16px]  hover:-translate-y-[3px]  hover:scale-102 hover:text-[#6A3093] transition-all duration-300 cursor-pointer">Interiors</p>
                        </div>
                    )
                }

                <div className="flex w-fit h-fit gap-[16px]">
                    {!medium&&(
                        <div className="bg-gradient-to-l from-[#A044FF] to-[#6A3093] flex items-center   rounded-[8px] p-[10px] hover:text-[white] hover:-translate-y-[2px] group transition-all duration-300 cursor-pointer">
                            <p className=" w-[115px] h-[20px] font-semibold text-[16px] leading-[22px] flex items-center justify-center">Post Property</p>
                        </div>
                    )}
                <div className=" bg-gradient-to-l from-[#A044FF] to-[#6A3093] p-[2px]  rounded-[12px] hover:-translate-y-[2px] group transition-translate duration-300 cursor-pointer">
                    <div className=" relative p-[10px] rounded-[10px] bg-white">
                        <div className="absolute inset-0 rounded-[9px]  bg-gradient-to-l from-[#A044FF] to-[#6A3093] opacity-0   group-hover:opacity-100 transition-opacity duration-300"/>
                            <div className={ " font-semibold text-[16px] leading-[22px] w-[58px] h-[20px] text-[#6A3093]  flex items-center justify-center group-hover:text-white transition-colors duration-300"}>
                             <p className="relative">Sign Up</p>
                       
                        </div>
                        
                    </div>
                </div>

                {medium&&(
                            <div className="flex justify-center items-center">
                                <Image src="/hamburgericon.png" alt="hello" width={8} height={8} className="h-8 w-8 mr-5" > </Image>
                            </div>
                        )}
                

            </div>

            </div>
        </div>

    )
}