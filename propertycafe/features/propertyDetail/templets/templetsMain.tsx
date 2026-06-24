import dynamic from "next/dynamic";

import Location from "./location";
import LostinListing from "./Lostinlisting";
import NotSureYet from "./NotSureYet";
import OwnerInfo from "./OwnerInfo";
import InterestedFillUp from "./InterestedFillUpForm";
import PostDetail from "./PostDetail";

const Rating = dynamic(
  () => import("./Rating")
);

type IsMobile600Type ={
    isMobile600: boolean
}

export default function TempletsMain({
    isMobile600
}: IsMobile600Type){
   return(
    <div className="flex flex-col gap-7">
         {
            isMobile600&&
            <Rating></Rating>
        }
        {
            isMobile600&&
            <LostinListing></LostinListing>  
        }

        <Location isMobile600 = {isMobile600}></Location>
        {
            isMobile600&&
            <div className="w-full  flex items-center justify-center">
                <NotSureYet></NotSureYet>
            </div>
        }
        {
            isMobile600&&
            <div className="flex w-full  justify-center">
                <OwnerInfo></OwnerInfo>
            </div>
        }
        {
            isMobile600&&
            <div className="flex justify-center">
                <InterestedFillUp></InterestedFillUp>
            </div>
        }
        {
            isMobile600&&
            <div className=" flex justify-center">
                <PostDetail></PostDetail>
            </div>
        } 
    </div>
   )
}