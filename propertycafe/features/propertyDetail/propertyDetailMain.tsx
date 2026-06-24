"use client"
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import { useEffect,useState } from "react"
import { useSelector } from "react-redux";
import Photo from "@/features/propertyDetail/photo";
import PropertyDetailTopSec from "./propertyDetailTopSec";
import { selectSelectedProperty } from "./selectors/depailPageSelector";
import OwnerInfo from "./templets/OwnerInfo";
import ApartmentDetail from "./apartmentDetail/ApartmentDetail";
import InterestedFillUp from "./templets/InterestedFillUpForm";
import PostDetail from "./templets/PostDetail";
import Views from "./moneyview/views";
import SchedulingandCalbackbutt from "./templets/SchedulaandCalbackButt";
import TempletsMain from "./templets/templetsMain";
import FlooringandPricing from "./floorandprice/FlooringandPricing";


const SimilarProperties = dynamic(
  () => import("./templets/SimilarProperties"),
  { loading: () => <p>Loading...</p> }
);

const ExploreMore = dynamic(


  () => import("@/sharedComponents/footer/exploremore")
);

export default function PropertyDetailMain(){
    
    const selectedArray = useSelector(selectSelectedProperty)

    const [mounted,setMounted] = useState(false)

    useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
    }, []);

    const isMobile600 =useMediaQuery({maxWidth:600})
    const isMobile = useMediaQuery({maxWidth: 1000})
    const isMobile400 = useMediaQuery({maxWidth: 400})

    if(!selectedArray) return <p>Select again</p>

    if(!mounted) return null
    return(
        <div className="w-full">
            <div className={`flex flex-col ${isMobile ? "gap-0" : "gap-3"}  w-[88vw] `}>
            
                <PropertyDetailTopSec isMobile ={isMobile} isMobile400={isMobile400} isSelectedArray={selectedArray}></PropertyDetailTopSec>

                <div className={`w-full rounded-xl flex overflow-hidden mb-10 mt-8 ${isMobile? "order-[-1]": ""}`}>
                    <Photo images={selectedArray.images}></Photo>     
                </div>

                <div>
                    <div>
                        <div className="mt-[-20px] mb-20 flex gap-2   ">
                            <div className="flex flex-col gap-10">
                                <ApartmentDetail selectedPropertyArray={selectedArray}></ApartmentDetail>
                                <FlooringandPricing selectedArray={selectedArray}></FlooringandPricing>
                                <TempletsMain isMobile600={isMobile600}></TempletsMain>
                            </div>
                        <div className="flex hidden lg:flex flex-col gap-5">
                            <OwnerInfo></OwnerInfo>
                            <InterestedFillUp></InterestedFillUp>
                            <PostDetail></PostDetail>
                        </div>          
                    </div>
                    <SimilarProperties></SimilarProperties>
                    {
                        
                        < ExploreMore></ExploreMore>
                    }
                    {
                        isMobile600&&
                        <Views></Views>
                    }
                    {
                        isMobile600&&
                        <div className="mb-5">
                            <SchedulingandCalbackbutt></SchedulingandCalbackbutt>
                        </div>
                    }
                </div>
                </div>
            </div>
        </div>
    )
}