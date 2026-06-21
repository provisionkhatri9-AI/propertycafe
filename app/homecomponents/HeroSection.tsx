"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import HeroMiddle from "./HeroMiddle"
import SearchComp from "./Search"
import UserProfileLink from "./userProfileLink"
import { useMediaQuery } from "react-responsive"
import { useEffect,useState } from "react"

const ExploreProperty = dynamic(
        ()=> import ("./explorepropertycomponents/ExplorePropertyMain"),
        {ssr:false}
    )

export default function HeroSection(){
    

    const[mounted,setMounted] = useState(false)

    useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
}, []);


    const isMobile = useMediaQuery({maxWidth:767})
    const isHieght550 = useMediaQuery({maxHeight:550})
    const isHieght500 = useMediaQuery({maxHeight:500})

     if(!mounted) return null
    return(

        <div className=" bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] via-[12%] to-[#8859A9] w-[100%]   relative">
            <div className={`h-screen flex  w-[95vw]   ${isMobile? "pl-6 transition-all duration-300": "pl-20"} `}>
                
                <div className={`absolute top-[10px] left-[20px] h-[741px]  w-[95%]`}>
                    <Image src="/building.png" alt="kad" width={0} height={0} priority sizes="100vw" className="w-full h-auto opacity-10 brightness-0 invert"/>
                </div>

                <HeroMiddle className="absolute top-[90px] left-[22%] w-[55%] h-[110px]"></HeroMiddle>

                <div className={`absolute top-[250px] ${isMobile? "left-[4.4%] w-[90%]" : "left-[13.4%] w-[72%]"} transition-all duration-500 ease-in-out`}>
                    <SearchComp></SearchComp>
                </div>

                <div className={`absolute ${isHieght550? "bottom-10" : "bottom-20"} left-1/2 -translate-x-1/2 whitespace-nowrap`}>
                    <UserProfileLink></UserProfileLink>
                </div>

                


            </div>

            <div className={`absolute   ${isHieght500? "top-[550px]": isHieght550 ? "top-[105%]" : "top-[105%]"}   left-1/2 -translate-x-1/2 h-full `}>
                    <div className="w-[100%] ">
                        <ExploreProperty></ExploreProperty>
                    </div>
            </div>

           
    </div>
    )


}