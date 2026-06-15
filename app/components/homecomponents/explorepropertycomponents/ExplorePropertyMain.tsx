"use client"

import Banner from "./components/banner";
import FindHomeBanner from "./components/FindHomeBanner";
import Recomended from "./components/Recomended";
import FeaturedPropertyMain from "../../featuredpropertycomponents/FeaturedPropertyMain";
import SearchFind from "./components/SearchFind";
import Service from "./components/services";
import ExplorePropertyCard from "./PropertyCard";
import BlogAndArticle from "./components/BlogAndArticle"
import ExploreMore from "./components/exploremore"

import Link from "next/link";

import { useMediaQuery } from "react-responsive";

export default function ExploreProperty(){
    
    const isMobile = useMediaQuery({maxWidth:857})
    const isWidth440 = useMediaQuery({maxWidth:440})
    

    return(
        <div className="flex flex-col gap-10 justify-center items-center w-[100%]">
            <div className={`flex flex-col gap-4 ${isMobile ? "items-start" : "justify-center"} `}>
                <div className={`font-semibold text-[clamp(1.3rem,4vw,2rem)] w-full  flex items-center ${isMobile ? "justify-start" : "justify-center"} `}>
                    <p>Explore Our Curated Property Catagories</p>
                </div>

                <div className="flex gap-3 items-center text-[clamp(0.8rem,4vw,1rem)] ">

                    <div className="flex flex-col ">
                        <button type="button" className="bg-gradient-to-l leading-[140%] text-start from-[#A044FF] to-[#6A3093] bg-clip-text text-transparent">
                        New Listing
                        </button>
                        <div className="h-1 rounded-xl w-full bg-gradient-to-l from-[#A044FF] to-[#6A3093]">

                        </div>
                    </div>

                    
                    <button type="button" className="text-start text-[#787D9C] leading-[140%]">
                    Trending
                    </button>
                    <button type="button" className="text-start text-[#787D9C] leading-[140%]">
                    Land
                    </button>
                    <button type="button" className="text-start text-[#787D9C] leading-[140%]">
                    New Projects
                    </button>
                    
                        <button type="button" className="text-start text-[#787D9C] leading-[140%]">
                            Bank Properties 
                        </button>
                    
                    {!isMobile&&(
                        <div className="flex gap-3">
                            <button type="button" className="text-start text-[#787D9C] leading-[140%]">
                            Price Reduction
                            </button>
                            <button type="button" className="text-start text-[#787D9C] leading-[140%]">
                            Investment Opportunities
                            </button>
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