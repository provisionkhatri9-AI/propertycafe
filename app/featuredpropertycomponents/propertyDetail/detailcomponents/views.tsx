import { useMediaQuery } from "react-responsive"
export default function Views(){
    const isMobile = useMediaQuery({maxWidth:600})
    return(
        <div className="w-full flex items-center justify-center mt-4 mb-4">
            <div className={`flex ${isMobile ? "justify-between items-center px-4 rounded-t-xl bg-gradient-to-r from-[#91F8F7] to-[#FFFFFF] w-[80%] h-[17px]" : "gap-2"} `}>
                    <p className="text-[12px] leading-[140%] text-[#787D9C]">👁 6000 views</p>
                    <p className="text-[#9D98A0] text-[12px]">Last Updated: Dec 12, 2024</p>
                </div>
        </div>
    )
}