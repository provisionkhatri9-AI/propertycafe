import { useMediaQuery } from "react-responsive"
import Image from "next/image"
import RealCard from "./RealCard"

export default function ExplorePropertyCard(){

   const properties = [
    {
        image: "/propertybuilding1.jpg",
        title: "Prime Rental Space",
        location: "Kathmandu",
        category: "Commercial",
    },
    {
        image: "/propertybuilding2.jpg",
        title: "Luxury Apartment",
        location: "Lalitpur",
        category: "Residential",
    },
    {
        image: "/propertybuilding3.jpg",
        title: "Office Space for Rent",
        location: "Pokhara",
        category: "Commercial",
    },
    {
        image: "/propertybuilding4.jpg",
        title: "Modern Flat",
        location: "Bhaktapur",
        category: "Residential",
    },
    ];

    const isMobile = useMediaQuery({maxWidth:1267})


    return(
        <div className="flex  items-center w-[100%]  ">
            <div className={`flex gap-5 overflow-x-auto   ${isMobile? "w-[90vw]" : "w-[80vw]" }`}>

            {
                properties.map((items,index)=>(
                    <RealCard key={index} 
                    image={items.image} 
                    title={items.title}  
                    location={items.location} 
                    category={items.category} 
                    isMobile={isMobile}></RealCard>
                ))
            }

        </div>
        </div>
    )
}