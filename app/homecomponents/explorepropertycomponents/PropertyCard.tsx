"use client"
import { useEffect, useRef, useState } from "react";
import RealCard from "./RealCard"
import ArrowComp from "@/app/propertyDetail/detailcomponents/arrowComp";
import { useDispatch, useSelector } from "react-redux";
import { slideLeftExp, slideRightExp } from "@/app/store/slices/slideClickSlice";
import { RootState } from "@/app/store/store";
import { properties } from "@/data/exploreCardData";
import { trending } from "@/data/trending";



export default function ExplorePropertyCard() {

    const sliderRef = useRef<HTMLDivElement | null>(null);

    const [width, setWidth] = useState<number>(0)

    const [hoverder, setHover] = useState<boolean>(false)

    const typeExploreNav = useSelector(
        (state: RootState) => state.exploreNav.selected
    )

    useEffect(() => {
        const updateWidth = () => {
            if (sliderRef.current?.children[0]) {
                const firstChild = sliderRef.current.children[0] as HTMLElement;
                setWidth(firstChild.offsetWidth + 20)
            }
        }
        updateWidth();

        window.addEventListener("resize", updateWidth)
        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, [properties.length])

    const dispatch = useDispatch()

    const slide = useSelector(
        (state: RootState) => state.slideOptions.exploreSlided
    )





    return (
        <div className="flex  items-center w-[100%] relative ">
            {
                slide > 0 &&
                <div className="absolute top-1/2 left-[-14px] z-[20]">
                    <ArrowComp onClick={() => dispatch(slideLeftExp())} direction="left"></ArrowComp>
                </div>

            }
            <div className={` overflow-hidden w-[90vw]  `} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>


                <div ref={sliderRef} className="" style={{
                    transform: `translateX(-${slide * width}px)`
                }}>
                    {
                        typeExploreNav == "New Listing" && (
                            <RealCard
                                explore={properties}

                            ></RealCard>


                        )
                    }
                    {
                        typeExploreNav == "Trending" && (
                            <RealCard
                                explore={trending}

                            ></RealCard>


                        )
                    }
                </div>

            </div>
            <div className={`absolute top-1/2 right-[-14px] z-[100] ${hoverder ? " translate-x-[3px]" : ""} transition-opacity duration-300 `} onMouseEnter={() => setHover(true)}>
                <ArrowComp onClick={() => dispatch(slideRightExp())} direction="right"></ArrowComp>
            </div>
        </div>
    )
}