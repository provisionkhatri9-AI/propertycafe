import Image from "next/image"
export default function SeeAllProperties(){
    return(
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
    )
}