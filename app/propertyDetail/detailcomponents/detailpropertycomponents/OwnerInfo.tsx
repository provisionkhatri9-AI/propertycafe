import Image from "next/image"
import { useSelector } from "react-redux"
import { RootState } from "@/app/store/store"
import { useMediaQuery } from "react-responsive"
export default function OwnerInfo(){
    const isWidth421 = useMediaQuery({maxWidth:421})
     const property = useSelector(
        (state:RootState) => state.detailPage.properties.find(
            (p) => p.id === state.detailPage.selectedId
        )
    )

    if(!property) return <p>error</p>
    return(
        <div className={`shadow relative  py-5 rounded-xl flex flex-col gap-6  ${isWidth421? "w-[100%]":"w-[370px] px-8 group"}`}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
    <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(106,0,0,0.3),transparent_90%)]"></div>
  </div>
                <div className="flex gap-2 items-center ">
                    <Image src="/logohoude.png" alt="hello" width={0} height={0} className="w-[22px] h-[22px]"></Image>
                    <p className="whitespace-nowrap text-[18px] text-[#6A3093]">Owner Information</p>
                </div>

                <div className="flex flex-col gap-5 items-center">
                    <div className="flex gap-3 justify-center items-center ">
                        <div className="min-w-[60px] h-full rounded-full overflow-hidden group-hover:scale-102 transition-all duration-300">
                            <Image src={property.ownerInfo.image}alt="hello" width={60} height={60} className="w-[60px] h-[60px] group-hover:scale-102 transition-all duration-300" ></Image>
                        </div>
                        <div>
                            <p className="text-[16px] text-[#111116] leading-[140%] whitespace-nowrap">{property.ownerInfo.name}</p>
                            <p className="text-[#9D98A0] text-[14px] leading-[22px]">{property.ownerInfo.location}</p>
                        </div>
                    </div>
                    <div className="bg-[#F0A300] flex gap-3 px-5 py-3 rounded-xl cursor-pointer hover:-translate-y-[2px] transition-all duration-300">
                        <Image src="/phone.png" alt="hello" width={0} height={0} className="h-[20px] w-[20px] "></Image>
                        <p className="font-semibold text-white text-[16px]"><span className="mr-1">{property.ownerInfo.countryCode}</span> {property.ownerInfo.number}</p>
                    </div>
                </div>
            </div>
    )
}