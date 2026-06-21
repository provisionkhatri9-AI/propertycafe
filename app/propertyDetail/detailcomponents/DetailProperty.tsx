 import dynamic from "next/dynamic";

import { useMediaQuery } from "react-responsive"
import OwnerInfo from "./detailpropertycomponents/OwnerInfo"
import ApartmentDetail from "./detailpropertycomponents/ApartmentDetail"
import Overview from "./detailpropertycomponents/Overview"
import Highlight from "./detailpropertycomponents/Highlights"
import Facilities from "./detailpropertycomponents/Facilities"
import InterestedFillUp from "./detailpropertycomponents/InterestedFillUpForm"
import PostDetail from "./detailpropertycomponents/PostDetail"
import Location from "./detailpropertycomponents/location"
import LostinListing from "./detailpropertycomponents/Lostinlisting"
import NotSureYet from "./detailpropertycomponents/NotSureYet"
import Views from "./views"
import SchedulingandCalback from "./SchedulaandCalback"


const SimilarProperties = dynamic(
  () => import("./SimilarProperties"),
  { loading: () => <p>Loading...</p> }
);

const ExploreMore = dynamic(
  () => import("@/app/homecomponents/explorepropertycomponents/components/exploremore")
);

const Rating = dynamic(
  () => import("./detailpropertycomponents/Rating")
);

const FlooringandPricing = dynamic(
  () => import("./detailpropertycomponents/FlooringandPricing"),
  {
    loading: () => <div>Loading pricing...</div>,
  }
);

export default function DetailProperty(){
    const isMobile =useMediaQuery({maxWidth:600})
    return(
        <div>
            <div className="mt-[-20px] mb-20 flex gap-2   ">
            <div className="flex flex-col gap-10">
                <ApartmentDetail ></ApartmentDetail>
                <Overview></Overview>
                 <Highlight></Highlight> 
                <Facilities></Facilities>
                 <FlooringandPricing></FlooringandPricing>
                {
                    isMobile&&
                    <Rating></Rating>
                }
                {
                    isMobile&&
                    <LostinListing></LostinListing>
                    
                }

                <Location isMobile = {isMobile}></Location>
                {
                    isMobile&&
                    <div className="w-full  flex items-center justify-center">
                        <NotSureYet></NotSureYet>
                    </div>
                }
                 {
                    isMobile&&
                    <div className="flex w-full  justify-center">
                        <OwnerInfo></OwnerInfo>
                    </div>
                }
                {
                    isMobile&&
                    <div className="flex justify-center">
                        <InterestedFillUp></InterestedFillUp>
                    </div>
                }
                {
                    isMobile&&
                    <div className="flex justify-center">
                        <PostDetail></PostDetail>
                    </div>
                } 
                 

            </div>

            
                
                    <div className="flex hidden lg:flex flex-col gap-5">
                    <OwnerInfo></OwnerInfo>
                <InterestedFillUp></InterestedFillUp>
                <PostDetail></PostDetail>
                </div>
                    
        
           
        </div>
        <SimilarProperties></SimilarProperties>
        {
            !isMobile&&
            <ExploreMore></ExploreMore>
        }
        {
            isMobile&&
            <Views></Views>
        }
        {
            isMobile&&
            <SchedulingandCalback></SchedulingandCalback>
        }
        </div>
    )
}