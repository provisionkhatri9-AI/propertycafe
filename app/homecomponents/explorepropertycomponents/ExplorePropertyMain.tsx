import dynamic from "next/dynamic";
import Banner from "./components/bannerFindAgent";
import FindHomeBanner from "./components/FindHomeBanner";
import SearchFind from "./components/SearchFind";
import Service from "./components/services";

import { useMediaQuery } from "react-responsive";
import ExploreNav from "./components/exploreNav";

const FeaturedPropertyMain = dynamic(
    () => import("@/app/homecomponents/featuredpropertycomponents/FeaturedPropertyMain"),
    {ssr:false}
)

const BlogAndArticle = dynamic(
    () => import("./components/BlogAndArticle")
)

const ExploreMore = dynamic(
    ()=> import("./components/exploremore")
)

const ExplorePropertyCard = dynamic(
    ()=> import("./PropertyCard")
)

const Recomended = dynamic(
    ()=> import("./components/Recomended")
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