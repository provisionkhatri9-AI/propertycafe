import Image from "next/image"
export default function LostinListing (){
    return(
        <div className="bg-[#FEFAE0] rounded-xl flex py-5 px-14 gap-2 items-center justify-center">
            <div className="flex flex-col gap-3">
                <p className="font-semibold text-[#0A400C] text-[16px] leading-[140%]">Lost in Listing?</p>
                <p className="text-[#B1AB86] text-[12px] leading-[140%]">Let me guide you.Talk to our real estate expert!</p>
                 <div className="text-[#F0A300] flex gap-2 items-center whitespace-nowrap ">
                                <p className="text-[14px] font-semibold leading-[140%]">Find Agent</p>
                                <p >➡ </p>
                            
                            </div>
            </div>

            <div>
                <Image src="/ladybook.png" alt="hello" width={0} height={0} className="max-w-[130px] max-h-[100px] min-h-[60px] min-w-[80px]" unoptimized></Image>
            </div>
        </div>
    )
}