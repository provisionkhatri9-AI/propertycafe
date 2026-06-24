import { useMediaQuery } from "react-responsive"
import SliderBoxCard from "./sliderBoxCard";
import { useSelector, useDispatch } from "react-redux";
import ArrowComp from "../arrowComp";
import { slideLeftFea, slideRightFea } from "./slice/slideClickSlice";
import { slide } from "./selectors/slideBoxSelector";
import { selectSliderData } from "./selectors/slideBoxSelector";


type sliderType= "recommended" | "feature" | "similar"

export default function SliderBox({
    widthClass= "w-[90vw]",
    type = "feature" 
}: {
  widthClass?: string;
  type?: sliderType;
} ){

    const isMobile = useMediaQuery({maxWidth: 1268})

    const dispatch = useDispatch()

    const slideLeftOrRight = useSelector(slide(type))
    const {featureSectionData,recommendedData,similarData} = useSelector(selectSliderData)
   

    const slideBoxDataMap = {
        feature : featureSectionData,
        recommended : recommendedData,
        similar : similarData
    }

    const selectedSlideBoxTypeData = slideBoxDataMap[type]



    return(
        <div className="w-[100%] flex flex-col relative">
            <div className={` ${isMobile ? "w-[90vw]" : widthClass}   pl-2 pb-4 overflow-hidden` } >
              {
                slideLeftOrRight >0 &&
                <div className="absolute  z-[200] top-1/2 left-[-14px]">
                <ArrowComp onClick={()=>dispatch(slideLeftFea(type)) } direction="left"></ArrowComp>
            </div>
            }
            
                <div className="slider-tracker"
        style={{
            transform: `translateX(-${slideLeftOrRight * 290}px)`,
        }}>
                  {
                    
                    selectedSlideBoxTypeData.map((items,key)=>(
                        <SliderBoxCard key={key} property={items}></SliderBoxCard>
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