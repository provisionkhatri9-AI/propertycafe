import Views from "./views";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

export default function Money(){
      const property = useSelector(
    (state: RootState) => state.detailPage.properties.find(
      (p) => p.id === state.detailPage.selectedId
    )
  );

    const isMobile = useMediaQuery({maxWidth:600})

    if(!property) return <p>error</p>
    return(
        <div className="whitespace-nowrap ">
        <p className="font-bold text-[clamp(1rem,4vw,1.1rem)]  text-[#111116] flex items-center  gap-1"><span className="text-[clamp(1.2rem,4vw,1.4rem)] font-bold">रु</span> 22,00,000 onwards</p>
        {
            isMobile&&
            <p className="text-[#9D98A0] text-[14px]">{property.top.price}</p>
        }
        {
            !isMobile&&
            <Views ></Views>
        } 
    </div>
    )
}