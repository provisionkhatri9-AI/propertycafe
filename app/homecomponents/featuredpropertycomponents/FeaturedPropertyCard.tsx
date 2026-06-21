import { useMediaQuery } from "react-responsive"
import FeatureRealCard from "./FeatureRealCard";
import { RootState } from "@/app/store/store";
import { useSelector, useDispatch } from "react-redux";
import ArrowComp from "@/app/propertyDetail/detailcomponents/arrowComp";
import { slideLeftFea, slideRightFea } from "@/app/store/slices/slideClickSlice";
import { properties } from "@/data/featrureCardData";
import { recommendedData } from "@/data/recommendedCardData";
import { similarData } from "@/data/similarData";

type sliderType= "recommended" | "feature" | "similar"

export default function FeaturedPropertyCard({
    widthClass= "w-[90vw]",
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
                    type == "feature" &&
                    properties.map((items,key)=>(
                        <FeatureRealCard key={key} property={items}></FeatureRealCard>
                    ))
                }
                {
                    type == "recommended" &&
                    recommendedData.map((items,key)=>(
                        <FeatureRealCard key={key} property={items}></FeatureRealCard>
                    ))
                }

                {
                    type == "similar" &&
                    similarData.map((items,key)=>(
                        <FeatureRealCard key={key} property={items} ></FeatureRealCard>
                    ))

                }
                </div>
                

            </div>
            <div className={`absolute  top-1/2  ${type == "similar" ? "right-[-5%] ": "right-[-1.5%] "}`}>
                <ArrowComp onClick={()=>dispatch(slideRightFea(type))} direction="right"></ArrowComp>
            </div>
        </div>
    )
}