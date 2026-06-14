import { useMediaQuery } from "react-responsive"

export default function Highlight(){

    const isMobile = useMediaQuery({maxWidth:767})
    return(
        <div className={`mt-[-30px] ${isMobile ? "bg-[#F4F8FF] p-2 rounded-xl" : ""} flex flex-col gap-6`}>
            <div >
                <p className="font-semibold text-[18px] leading-[140%]">Highlights</p>
            </div>

            <div className="flex space-between whitespace-nowrap">
                <div className="min-w-[80px] w-full">
                    <p className="text-[16px] leading-[140%] text-[#4B4B4B] ">18-0-0 Ropani</p>
                    <p className="text-[14px] leading-[140%] text-[#9D98A0]">Total Area</p>
                </div>
                <div className="min-w-[80px] w-full">
                    <p className="text-[16px] leading-[140%] text-[#4B4B4B]">3246 Ropani</p>
                    <p className="text-[14px] leading-[140%] text-[#9D98A0]">Build Up Area</p>
                </div>
                <div className="min-w-[80px] w-full">
                    <p className="text-[16px] leading-[140%] text-[#4B4B4B]">BlackTopped</p>
                    <p className="text-[14px] leading-[140%] text-[#9D98A0]">Road Type</p>
                </div>
            </div>
             <div className="flex space-between  whitespace-nowrap">
                <div className="min-w-[80px] w-full">
                    <p className="text-[16px] leading-[140%] text-[#4B4B4B]">1278</p>
                    <p className="text-[14px] leading-[140%] text-[#9D98A0]">Property ID</p>
                </div>
                <div className="min-w-[80px] w-full">
                    <p className="text-[16px] leading-[140%] text-[#4B4B4B]">South East</p>
                    <p className="text-[14px] leading-[140%] text-[#9D98A0]">Property Face</p>
                </div>
                <div className="min-w-[80px] w-full">
                    <p className="text-[16px] leading-[140%] text-[#4B4B4B]">20Feet</p>
                    <p className="text-[14px] leading-[140%] text-[#9D98A0]">Road Access</p>
                </div>
            </div>
        </div>
    )
}