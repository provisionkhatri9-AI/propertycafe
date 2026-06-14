"use client"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"
import OwnerInfo from "./OwnerInfo"
import ApartmentDetail from "./ApartmentDetail"
import Overview from "./Overview"
import Highlight from "./Highlights"
import Facilities from "./Facilities"
import FlooringandPricing from "./FlooringandPricing"
import InterestedFillUp from "./InterestedFillUpForm"
import PostDetail from "./PostDetail"
import Location from "./location"
import SimilarProperties from "./SimilarProperties"
import ExploreMore from "@/app/components/exploremore/exploremore"
import Rating from "./Rating"
import LostinListing from "./Lostinlisting"
import NotSureYet from "./NotSureYet"
import Views from "./views"
import SchedulingandCalback from "./SchedulaandCalback"


export default function DetailProperty(){
    const isMobile =useMediaQuery({maxWidth:600})
    return(
        <div>
            <div className="mt-[-20px] mb-20 flex gap-2 mr-1">
            <div className="flex flex-col gap-10">
                <ApartmentDetail></ApartmentDetail>
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

                <Location></Location>
                {
                    isMobile&&
                    <NotSureYet></NotSureYet>
                }
                {
                    isMobile&&
                    <div className="flex justify-center">
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