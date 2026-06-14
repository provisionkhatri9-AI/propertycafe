"use client"

import Banner from "../bannercomponent/banner";
import FindHomeBanner from "../components/findhomebanner/FindHomeBanner";
import Recomended from "../components/recommended/Recomended";
import FeaturedPropertyMain from "../featuredpropertycomponents/FeaturedPropertyMain";
import SearchFind from "../findcomponent/SearchFind";
import Service from "../servicescomponent/services";
import ExplorePropertyCard from "./PropertyCard";
import BlogAndArticle from "../components/blogandarticles/BlogAndArticle"
import ExploreMore from "../components/exploremore/exploremore"

import Link from "next/link";

import { useMediaQuery } from "react-responsive";

export default function ExploreProperty(){
    
    const isMobile = useMediaQuery({maxWidth:857})
    

    return(
        <div className="flex flex-col gap-10 justify-center items-center w-[100%]">
            <div className={`flex flex-col gap-4 ${isMobile ? "items-start" : "justify-center"} `}>
                <div className={`font-semibold text-[clamp(1rem,4vw,2rem)] w-full  flex items-center ${isMobile ? "flex-start" : "justify-center"} `}>
                    <p>Explore Our Curated Property Catagories</p>
                </div>

                <div className="flex gap-3 items-center justify-center">

                    <div className="flex flex-col">
                        <div className="bg-gradient-to-l text-[16px] leading-[140%] from-[#A044FF] to-[#6A3093] bg-clip-text text-transparent">
                        New Listing
                        </div>
                        <div className="h-1 rounded-xl w-full bg-gradient-to-l from-[#A044FF] to-[#6A3093]">

                        </div>
                    </div>

                    
                    <div className="text-[16px] text-[#787D9C] leading-[140%]">
                    Trending
                    </div>
                    <div className="text-[16px] text-[#787D9C] leading-[140%]">
                    Land
                    </div>
                    <div className="text-[16px] text-[#787D9C] leading-[140%]">
                    New Projects
                    </div>
                    <div className="text-[16px] text-[#787D9C] leading-[140%]">
                    Bank Properties 
                    </div>
                    {!isMobile&&(
                        <div className="flex gap-3">
                            <div className="text-[16px] text-[#787D9C] leading-[140%]">
                            Price Reduction
                            </div>
                            <div className="text-[16px] text-[#787D9C] leading-[140%]">
                            Investment Opportunities
                            </div>
                        </div>
                    )}
                   
                </div>

                <div className="mt-4 w-full">
                    <ExplorePropertyCard></ExplorePropertyCard>
                    
                </div>

                <div className="w-full">
                    
                <FeaturedPropertyMain></FeaturedPropertyMain>
            
                </div>

                <div className="w-full">
                    <Banner></Banner>
                </div>

                <div className="w-full">
                    <Service></Service>
                </div>
                
                <div className="w-full">
                    <SearchFind></SearchFind>
                </div>
                
                <div className="w-full">
                    <Recomended></Recomended>
                </div>

                <div className="w-full px-15 py-10 mt-10">
                    <FindHomeBanner></FindHomeBanner>
                </div>

                <div className="w-full">
                    <BlogAndArticle></BlogAndArticle>
                </div>

                 <div className="w-full mt-5">
                    <ExploreMore></ExploreMore>
                </div> 
            </div>

            
        </div>
    )
}