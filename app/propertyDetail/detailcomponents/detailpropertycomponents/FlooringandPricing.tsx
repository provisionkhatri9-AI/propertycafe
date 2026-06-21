
import Image from "next/image"
import { useMediaQuery } from "react-responsive"
import MobileScreen from "./mobilescreen"
import { RootState } from "@/app/store/store"
import { useSelector,useDispatch } from "react-redux"
import { setSelectedId } from "@/app/store/slices/annaSlice"
import RoomAndSize from "./roomAndSize"
export default function FlooringandPricing(){

    const dispatch = useDispatch()

     const property = useSelector(
        (state:RootState) => state.detailPage.properties.find(
            (p) => p.id === state.detailPage.selectedId
        )
    )

    const selectedID = useSelector(
        (state:RootState) => state.aanaSlice.setSelectedId
    )

    const isBigMobile1 = useMediaQuery({maxWidth:1047})
    const isBigMobile = useMediaQuery({maxWidth:1017})
    const isMobile = useMediaQuery({maxWidth:780})
    const isLittleMobile = useMediaQuery({maxWidth : 700})

    
    if(!property) return <p>error</p>
    
   
    return(
        <div className={`${isLittleMobile? "p-0":"shadow p-7"} rounded-2xl  flex flex-col items-center ${isLittleMobile?"gap-2":"gap-7"}`}>
            <div className="w-full">
                <p className="font-semibold text-[18px] w-full self-start leading-[140%] text-[#4B4B4B]">Floors and Pricing</p>
            </div>

            <div className="w-full">
                {
                isLittleMobile&&
                <div className="px-2 w-fit  rounded-xl py-1 bg-[#E7EDFF]">
                    <p className="text-[#5379FF] text-[14px] leading-[140%]">{property.typeAndPricing.type}</p>
                </div>
            }
            </div>

            <div className="w-full">
                <p className={`flex text-[14px] w-full mb-3 leading-[140%] ${isMobile ? "justify-between" : ""} `}>Showing all sizes<span className="text-[#787D9C] ">(1 Anna = 342.25 Sq.ft)</span></p>
               
                    {
                        !isLittleMobile&&
                        <div className="border-[0.5px]  flex justify-between  border-[#F0EAF4] p-3 rounded-2xl">
                        {
                            property.priceAndFloor.map((items,id)=>(
                                
                            <div key={id} onClick={()=>dispatch(setSelectedId(id))} className={`py-2 px-6 w-fit  h-[45px] ${selectedID === id ? "bg-[#F0EAF4] text-[#6A3093]" :""} rounded-xl  flex items-center cursor-pointer justify-center`}>
                                <p className="text-[14px] leading-[140%] ">{items.area}</p>
                            </div>
                            ))
                        }
                        </div>
                    }
            </div>

            {
                !isLittleMobile&&
                <div className="relative hidden md:block w-full ">
                <div>
                    <p className="text-[#9D98A0] text-[16px] leading-[140%]">{property.typeAndPricing.type}</p>
                    <p className="font-semibold text-[18px] text-[#111116] leading-[140%]"><span className="mr-2">रु</span>{property.priceAndFloor[0].price}</p>
                </div>
                <div className="absolute top-0 right-0 flex flex-col hidden md:flex gap-3">
                    <div className="flex items-center justify-center border-[1px] border-[#F0F2FC] shadow rounded-2xl px-3 py-2 cursor-pointer">
                        <div className="bg-[#FEF6E6] px-5 py-1.5 rounded-xl">
                            <p className="font-semibold text-[#F0A300] text-[16px] leading-[140%]">3D</p>
                        </div>
                        <div className=" px-5 py-1.5 rounded-xl">
                            <p className="font-semibold text-[#9D98A0] text-[16px] leading-[140%]">2D</p>
                        </div> 
                    </div>

                    <div className="flex items-center bg-white  justify-center border-[1px] border-[#F0F2FC] shadow rounded-2xl px-1 py-1 cursor-pointer">
                        <div className=" px-1 py-1.5 rounded-xl  h-[40px] w-[35px]">
                            <Image src="/rot1.png" alt="hello" width={30} height={30} className="w-full h-full" ></Image>
                        </div>
                        <div className="  px-1 py-1.5 rounded-xl">
                            <p className="font-semibold text-[#9D98A0] text-[16px] leading-[140%]">Rotate</p>
                        </div> 
                        <div className=" px-1py-1.5 rounded-xl h-[17px] w-[17px]">
                            <Image src="/rot2.png" alt="hello" width={10} height={10} className="w-full h-full"></Image>
                        </div>
                    </div>

                    <div className="flex items-center gap-1 bg-white  justify-center border-[1px] border-[#F0F2FC] shadow rounded-2xl px-1 py-1">
                        <div className=" px-1 py-1.5 rounded-xl">
                            <Image src="/mag2.png" alt="hello" width={20} height={20} className="w-full h-full" ></Image>
                        </div>
                        <div className="  px-1 py-1.5 rounded-xl">
                            <p className="font-semibold text-[#9D98A0] text-[16px] leading-[140%]">100%</p>
                        </div> 
                        <div className=" px-1py-1.5 rounded-xl">
                            <Image src="/mag1.png" alt="hello" width={20} height={20} className="w-full h-full" ></Image>
                        </div>
                    </div>
                    
                </div>
            </div> 
            }

            {
                !isLittleMobile&&
                <div className="w-full ">
                <div className="relative w-full">
                    <div className=" text-[#F0A300] flex w-full items-center ">
                        <p className=" absolute text-[25px] top-[65%]">Enter</p>
                        <p className={`absolute rotate-325 text-[clamp(5rem,4vw,12rem)]  ${isBigMobile? "top-[50%]" : "top-[47%]"} ${isMobile?"top-[47%]": ""} left-[8%]`}>➡</p>
                    </div>
                    <div className="pl-20">
                        <Image src="/allroommap.png" alt="hello" width={622} height={476} className="max-w-[622px] w-full max-h-[467px]" ></Image>
                    </div>
                </div>
            </div>
            }

           {
             !isLittleMobile&&
             <div className={`${isLittleMobile? "w-[420px]" : ""} ${isBigMobile1? "w-[500px]" : "w-[550px]"} flex items-center justify-center  `}>
                <div className="relative  h-full w-[40px] shrink-0   flex items-center justify-center">
                
                    <RoomAndSize property={property.roomAndSize}></RoomAndSize>
                    
                

            </div>
                
            </div>
           }

           {
            isLittleMobile&&
            <div className=" flex flex-col gap-2  w-full">
             <MobileScreen></MobileScreen>

             <div className="flex flex-col gap-1 font-medium text-[14px] leading-[140%] text-[#4B4B4B]">
                <div className="flex items-center gap-1" >
                    <p className="">See all <span className="text-[#F0A300]">14 Properties to buy</span> in Budanilkantha</p>
                    <Image src="/squarearrow.png" alt="hello" width={0} height={0} className="w-[14px] h-[14px]"></Image>
                </div>

                <div className="flex items-center gap-1">
                    <p className="">See all <span className="text-[#F0A300]">14 Properties to rent</span> in Budanilkantha</p>
                    <Image src="/squarearrow.png" alt="hello" width={0} height={0} className="w-[14px] h-[14px]"></Image>
                </div>
             </div>
           </div>
           }
           
        </div>
    )
}