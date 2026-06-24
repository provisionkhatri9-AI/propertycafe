import { useMediaQuery } from "react-responsive"
import { useSelector } from "react-redux"
import { RootState } from "@/app/store/store";

export default function Views(){
      const property = useSelector(
    (state: RootState) => state.detailPage.properties.find(
      (p) => p.id === state.detailPage.selectedId
    )
  );


    const isMobile = useMediaQuery({maxWidth:600})
    const isMobile391 = useMediaQuery({maxWidth:391})

    if(!property) return <p>no select</p>
    return(
        <div className={`w-full  flex ${isMobile? "justify-center" : "justify-start"}  items-center mb-4`}>
            <div className={`flex ${isMobile391 ? "w-[100%] bg-gradient-to-r from-[#91F8F7] to-[#FFFFFF] justify-between  pt-1 px-4 rounded-t-xl" : isMobile ? " justify-between items-center gap-4 px-4 rounded-t-xl bg-gradient-to-r from-[#91F8F7] to-[#FFFFFF] w-[80%] h-[17px]" : "gap-2"} `}>
                    <p className="text-[12px] leading-[140%] text-[#787D9C]">👁 {property.top.views} views</p>
                    <p className="text-[#9D98A0] text-[12px]">Last Updated: {property.top.latestUpdate}</p>
                </div>
        </div>
    )
}