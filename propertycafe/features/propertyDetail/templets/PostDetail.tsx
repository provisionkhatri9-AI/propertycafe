import Image from "next/image"

export default function PostDetail(){
    return(
        <div className="h-fit p-3 bg-[#EBE7FA] flex flex-col  items-center justify-center rounded-xl">
            <div className="flex flex-col  gap-5">
                <p className="text-[16px] font-semibold text-[#7A5CDE]">Are you property owner looking to Sell or Rent?</p>
                    <div className="flex pr-3">
                       <div className="flex flex-col gap-7">
                                 <p className="text-[#4B4B4B] text-[12px] leading-[140%]">Find reliable tenants quickly – zero hassle, guaranteed rent!</p>

                            <div className="text-[#F0A300] flex gap-2 items-center group cursor-pointer">
                                <p className="text-[clamp(0.8rem,4vw,1rem)] font-semibold leading-[140%]">Post Porperty Detail</p>
                                <p className="group-hover:translate-x-[2px] transition-all duration 300">➡ </p>
                            
                            </div>
                            </div>

                        <div>
                            <Image src="/manybuilding.png" alt="hello" width={0} height={0} className="h-[70px] w-[190px]" unoptimized></Image>
                        </div>

                        </div>
                    </div>
            
        </div>
    )
}