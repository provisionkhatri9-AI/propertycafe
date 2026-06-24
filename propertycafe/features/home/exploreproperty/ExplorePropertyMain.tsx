import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import Banner from "./templets/bannerFindAgent";
import FindHomeBanner from "./templets/FindHomeBanner";
import SearchFind from "./templets/SearchFind";
import Service from "./templets/services";

import ExploreNav from "./exploreSliderCard/exploreNav";

const FeaturedProperty = dynamic(
    () => import("./templets/FeaturedProperty"),
    {ssr:false}
)

const BlogAndArticle = dynamic(
    () => import("./templets/BlogAndArticle")
)

const ExploreMore = dynamic(
    ()=> import("@/sharedComponents/footer/exploremore")
)

const ExplorePropertyCard = dynamic(
    ()=> import("./exploreSliderCard/PropertyCard")
)

const Recomended = dynamic(
    ()=> import("./templets/Recomended")
)

export default function ExploreProperty(){
    
    const isMobile = useMediaQuery({maxWidth:857})
   
    

    return(
        <div className="flex flex-col gap-10 justify-center items-center w-[90vw]">
            <div className={`flex flex-col w-full gap-4 ${isMobile ? "items-start" : "justify-center"} `}>
                <div className={`font-semibold text-[clamp(1.3rem,3vw,2rem)] w-full   flex items-center ${isMobile ? "justify-start" : "justify-center"} `}>
                    <p className="cursor-pointer hover:text-[#7230B5] transition-colors duration-300">Explore Our Curated Property Catagories</p>
                </div>

                <ExploreNav isMobile={isMobile}></ExploreNav>

                <div className="mt-4 w-full">
                    <ExplorePropertyCard></ExplorePropertyCard>
                    
                </div>

                <div className="w-full">
                    
                <FeaturedProperty/>
            
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