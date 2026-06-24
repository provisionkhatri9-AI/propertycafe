"use client"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import RealCard from "./RealCard"
import ArrowComp from "@/sharedComponents/arrowComp"
import { exploreData } from "./selectors/exploreSelector";
import { useSlideCard } from "./hooks/sliderCardHook";

export default function ExplorePropertyCard() {

    const data = useSelector(exploreData)

    const {sliderRef,scroll,width,hoverder,left,right,onMouseEnter,onMouseLeave} = useSlideCard(data.length)
    useEffect(()=>{
                console.log(width)
            },[width])
    return (
        <div className="flex  items-center w-[100%] relative ">
            {
                scroll > 0 &&
                <div className="absolute top-1/2 left-[-14px] z-[20]">
                    <ArrowComp onClick={left} direction="left"></ArrowComp>
                </div>

            }
            <div className={` overflow-hidden w-[90vw]  `} onMouseEnter={onMouseEnter} onMouseLeave={ onMouseLeave}>


                <div ref={sliderRef} className="transition-transform duration-300" style={{
                    transform: `translateX(-${scroll * width}px)`
                }}>
                    <RealCard explore={data}></RealCard>
                </div>

            </div>
            <div className={`absolute top-1/2 right-[-14px] z-[100] ${hoverder ? " translate-x-[3px]" : ""} transition-opacity duration-300 `} onMouseEnter={ onMouseEnter}>
                <ArrowComp onClick={right} direction="right"></ArrowComp>
            </div>
        </div>
    )
}