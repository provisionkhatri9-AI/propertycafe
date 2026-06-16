

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

export default function FeaturedPropertyCard({
    widthClass= "w-[95wv]"
}){

    const isMobile = useMediaQuery({maxWidth: 1268})

    return(
        <div className="w-[100%] flex flex-col">
            <div className={`flex gap-2 ${isMobile ? "w-[90vw]" : widthClass}  pl-2 pb-4 overflow-x-auto scrollbar-hide`}>
            
                {
                    properties.map((items,key)=>(
                        <FeatureRealCard key={key} property={items}></FeatureRealCard>
                    ))
                }
                

            </div>
        </div>
    )
}