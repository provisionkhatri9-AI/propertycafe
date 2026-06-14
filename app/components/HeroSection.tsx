"use client"

import Image from "next/image"
import NavBar from "./nav"
import HeroMiddle from "./HeroMiddle"
import SearchComp from "./Search"
import UserProfileLink from "./userProfileLink"
import { useMediaQuery } from "react-responsive"
import ExploreProperty from "../explorepropertycomponents/ExplorePropertyMain"

export default function HeroSection(){

    const isMobile = useMediaQuery({maxWidth:767})

    return(

        <div className=" bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] via-[12%] to-[#8859A9] w-[100%]   relative">
            <div className={`h-screen flex  w-[95vw]  ${isMobile? "pl-6 transition-all duration-300": "pl-20"} `}>
                
                <div className={`absolute top-[120px] left-[20px] h-[741px]  w-[95%]`}>
                    <Image src="/building.png" alt="kad" width={0} height={0}  sizes="100vw" className="w-full h-auto opacity-10 brightness-0 invert"/>
                </div>

                <HeroMiddle className="absolute top-[90px] left-[22%] w-[55%] h-[110px]"></HeroMiddle>

                <div className={`absolute top-[250px] ${isMobile? "left-[4.4%] w-[90%]" : "left-[13.4%] w-[72%]"} transition-all duration-500 easy-in-out`}>
                    <SearchComp></SearchComp>
                </div>

                <div className={`absolute bottom-20 left-1/2 -translate-x-1/2 whitespace-nowrap`}>
                    <UserProfileLink></UserProfileLink>
                </div>

                


            </div>

            <div className={`absolute  top-[620px]   left-1/2 -translate-x-1/2 h-full w-[90%]`}>
                    <div className="w-[100%]">
                        <ExploreProperty></ExploreProperty>
                    </div>
            </div>

           
    </div>
    )


}