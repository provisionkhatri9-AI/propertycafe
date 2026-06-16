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
        <div className="flex  items-center w-[100%] relative ">
            <div className={`flex gap-5 overflow-x-auto  w-[90vw]`}>
                

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
        <div className="absolute sm:right-[-17px] right-[-14px] border-2  w-fit h-fit border-[2px] overflow-hidden z-[200] border-white rounded-full  right-0">
                    <div className="bg-gradient-to-b from-[#FFFFFF1C] to-[#0000000A] backdrop-blur-2xl z-[200] px-1 py-1">
                        <div className="px-2 py-2 bg-white rounded-full">
                            <Image src="/downarrow.png" alt="hello" width={0} height={0} className="rotate-270 w-[10px] h-[10px]"></Image>
                        </div>
                    </div>
                </div>
        </div>
    )
}