

const properties = [
  {
    image: "/featuredproduct1.jpg",
    tag: "Commercial",
    price: "$290,000",
    sqft: 4247,
    beds: 4,
    baths: 2,
    location: "Tourist Hub, Thamel, Kathmandu",
    postedBy: "Developer / Posted by owner",
  },
  {
    image: "/featuredproduct2.jpg",
    tag: "Residential",
    price: "$350,000",
    sqft: 3800,
    beds: 3,
    baths: 2,
    location: "Sanepa, Lalitpur",
    postedBy: "Posted by owner",
  },
  {
    image: "/featuredproduct3.jpg",
    tag: "Apartment",
    price: "$420,000",
    sqft: 5100,
    beds: 5,
    baths: 3,
    location: "Lakeside, Pokhara",
    postedBy: "Developer",
  },
  {
    image: "/featuredproduct4.jpg",
    tag: "Villa",
    price: "$580,000",
    sqft: 6500,
    beds: 6,
    baths: 4,
    location: "Budhanilkantha, Kathmandu",
    postedBy: "Premium Seller",
  },
];

import { useMediaQuery } from "react-responsive"
import FeatureRealCard from "./FeatureRealCard";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import ArrowComp from "./propertyDetail/detailcomponents/arrowComp";
import { slideLeftFea, slideRightExp, slideRightFea } from "@/app/store/slices/slideClickSlice";

type sliderType= "recommended" | "feature"

export default function FeaturedPropertyCard({
    widthClass= "w-[95wv]",
    type = "feature" 
}: {
  widthClass?: string;
  type?: sliderType;
} ){

    const isMobile = useMediaQuery({maxWidth: 1268})

    const dispatch = useDispatch()
     const slide = useSelector(
     (state: RootState) => state.slideOptions.featureSlicing[type]
    )
    console.log(slide)


    return(
        <div className="w-[100%] flex flex-col relative">
            <div className={` ${isMobile ? "w-[90vw]" : widthClass}   pl-2 pb-4 overflow-hidden` } >
              {
                slide >0 &&
                <div className="absolute  z-[200] top-1/2 left-[-14px]">
                <ArrowComp onClick={()=>dispatch(slideLeftFea(type)) } direction="left"></ArrowComp>
            </div>
            }
            
                <div className="flex gap-2 transition-transform duration-300"
        style={{
            transform: `translateX(-${slide * 298}px)`,
        }}>
                  {
                    properties.map((items,key)=>(
                        <FeatureRealCard key={key} property={items}></FeatureRealCard>
                    ))
                }
                </div>
                

            </div>
            <div className="absolute sm:right-[-17px] top-1/2 right-[-14px]">
                <ArrowComp onClick={()=>dispatch(slideRightFea(type))} direction="right"></ArrowComp>
            </div>
        </div>
    )
}