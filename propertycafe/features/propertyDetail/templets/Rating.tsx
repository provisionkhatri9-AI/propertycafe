import Image from "next/image"
import { useMediaQuery } from "react-responsive"
export default function Rating(){

    const isMobileLittle = useMediaQuery({maxWidth:500})
    const isWidth400 = useMediaQuery({maxWidth:400})
    const ratingConnectivity = 4.1

    const ratingConectivityPercentage = (ratingConnectivity/5) * 100

    const ratingMaintainance = 3.1

    const ratingMaintainancePercentage = (ratingMaintainance/5) * 100
    const ratingConstruction = 4
    const ratingConstructionPercentage = (ratingConstruction/5) *100
    const ratingSociallife= 4.4
    const ratingSociallifePercentage = (ratingSociallife/5) *100
    const ratingAminities = 4.7
    const ratingAminitiesPercentage = (ratingAminities/5) *100
    const totalReview= 5
    const averageReview1 = (ratingAminities+ ratingConnectivity + ratingConstruction+ ratingMaintainance+ ratingSociallife)/ totalReview
    const averageReview = averageReview1.toFixed(1)
     
    return(
        <div className="">
            <p className="font-semibold text-[18px] w-full self-start leading-[140%] text-[#4B4B4B]">Ratings on Property</p>

            <div className={`flex shadow p-4 mt-2 rounded-xl  ${isMobileLittle? "-translate-x-[2px] " : "justify-start"} justify-center w-full   gap-2`}>
                <div className={`flex flex-col gap-2 h-[96px] ${isWidth400? "w-fit mr-3" : "w-[154px]"}    relative  items-center justify-center`}>
                    <div className="absolute h-full w-full rounded-full bg-[radial-gradient(circle_at_center,_#E7C4FF_0%,_#FFFFFF_50%)] blur-sm">
                   
                </div>
                <p className="text-[40px] z-index-2 font-bold leading-[140%] relative">{averageReview}</p>
                <p className="text-[12px] font-medium text-[#4B4B4B] leading-[140%] relative">out of 5</p>
                
            </div>

            <div className="flex flex-col gap-1">

                <div className="flex items-center gap-2">
                    <Image src="/star.png" alt="hello" width={0} height={0} className="w-[16px] h-[16px]"></Image>
                    <div className="h-[4.25px] w-[95px] rounded-xl bg-[#F0F0F0] overflow-hidden">
                        <div className="h-full  bg-gradient-to-r from-[#A044FF] to-[#6A3093]" style={{width: `${ratingConectivityPercentage}%`}}>

                        </div>
                    </div>
                    <p className="text-[10px] text-[#787D9C]">Connectivity</p>
                </div>
            
                <div className="flex items-center gap-2">
                    <Image src="/star.png" alt="hello" width={0} height={0} className="w-[16px] h-[16px]"></Image>
                    <div className="h-[4.25px] w-[95px] rounded-xl bg-[#F0F0F0] overflow-hidden">
                        <div className="h-full  bg-gradient-to-r from-[#A044FF] to-[#6A3093]" style={{width: `${ratingMaintainancePercentage}%`}}>

                        </div>
                    </div>
                    <p className="text-[10px] text-[#787D9C]">Maintainance</p>
                </div>
                

                <div className="flex items-center gap-2">
                    <Image src="/star.png" alt="hello" width={0} height={0} className="w-[16px] h-[16px]"></Image>
                    <div className="h-[4.25px] w-[95px] rounded-xl bg-[#F0F0F0] overflow-hidden">
                        <div className="h-full  bg-gradient-to-r from-[#A044FF] to-[#6A3093]" style={{width: `${ratingConstructionPercentage}%`}}>

                        </div>
                    </div>
                    <p className="text-[10px] text-[#787D9C]">Construction</p>
                </div>
                

               <div className="flex items-center gap-2">
                    <Image src="/star.png" alt="hello" width={0} height={0} className="w-[16px] h-[16px]"></Image>
                    <div className="h-[4.25px] w-[95px] rounded-xl bg-[#F0F0F0] overflow-hidden">
                        <div className="h-full  bg-gradient-to-r from-[#A044FF] to-[#6A3093]" style={{width: `${ratingSociallifePercentage}%`}}>

                        </div>
                    </div>
                    <p className="text-[10px] text-[#787D9C]">Social Life</p>
                </div>

                <div className="flex items-center gap-2">
                    <Image src="/star.png" alt="hello" width={0} height={0} className="w-[16px] h-[16px]"></Image>
                    <div className="h-[4.25px] w-[95px] rounded-xl bg-[#F0F0F0] overflow-hidden">
                        <div className="h-full  bg-gradient-to-r from-[#A044FF] to-[#6A3093]" style={{width: `${ratingAminitiesPercentage}%`}}>

                        </div>
                    </div>
                    <p className="text-[10px] text-[#787D9C]">Amenities</p>
                </div>

            </div>
            </div>
        </div>
    )
}