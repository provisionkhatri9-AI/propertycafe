"use client"
import { useMediaQuery } from "react-responsive";
import DetailProperty from "./detailcomponents/DetailProperty";
import Photo from "./detailcomponents/photo";
import Money from "./detailcomponents/money";
import SchedulingandCalback from "./detailcomponents/SchedulaandCalback";
import Bhkanna from "./detailcomponents/2bkanna";
import Image from "next/image";
import { useEffect,useState } from "react"
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function PropertyDetail(){

    const isSelected = useSelector(
        (state: RootState) => state.detailPage.properties.find(
            (p)=>p.id === state.detailPage.selectedId
        )
    )

    const [mounted,setMounted] = useState(false)

    useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
}, []);


    const isMobile = useMediaQuery({maxWidth: 1000})
    const isMobile400 = useMediaQuery({maxWidth: 400})

    if (!isSelected) return <p>No property selected</p>;

    if(!mounted) return null
    return(


       <div className="w-full">
             <div className={`flex flex-col ${isMobile ? "gap-0" : "gap-3"}  w-[88vw] `}>
            <div className={` ${isMobile ? "mt-[-25px]" : "mt-14"} flex justify-between `}>
                <div className=" w-full">
                <div  className="flex flex-col gap-2">
                    <p className="font-bold text-[clamp(1.1rem,4vw,1.2rem)] leading-[140%]">{isSelected.top.title}</p>
                    <div className="flex gap-1 items-center">
                        <p>⚲</p>
                        <p className="text-[14px] leading-[140%]">{isSelected.top.location}</p>
                    </div>

                     {
                        !isMobile&&
                        <SchedulingandCalback></SchedulingandCalback>
                    }
                    {
                        isMobile&&
                        <Bhkanna ></Bhkanna>
                    }
                    {
                        isMobile&&
                        <Money></Money>
                    }
                    {
                        isMobile&&
                        <div className={`bg-[#F0A300] flex ${isMobile400? "w-[90%]" : "w-[40%]"} items-center justify-center gap-3 px-5 py-3 rounded-xl`}>
                            <Image src="/phone.png" alt="hello" width={0} height={0} className="h-[20px] w-[20px]"></Image>
                            <p className="font-semibold text-white text-[16px]">Owner</p>
                        </div>
                    }
                </div>
            </div>

                {
                    !isMobile &&
                    <div>
                        <Money ></Money>
                    </div>
                }
            </div>


            <div className={`w-full rounded-xl flex overflow-hidden mb-10 mt-8 ${isMobile? "order-[-1]": ""}`}>
                
                    <Photo images={isSelected.images}></Photo> 
                
            </div>

            <div>
                <DetailProperty ></DetailProperty>
            </div>
        </div>
       </div>
    )
} 