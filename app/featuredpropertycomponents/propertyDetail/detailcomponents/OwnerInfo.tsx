import Image from "next/image"
export default function OwnerInfo(){
    return(
        <div className="shadow px-8 py-5 rounded-xl flex flex-col gap-6 w-[370px]">
                <div className="flex gap-2 items-center ">
                    <Image src="/logohoude.png" alt="hello" width={0} height={0} className="w-[22px] h-[22px]"></Image>
                    <p className="whitespace-nowrap text-[18px] text-[#6A3093]">Owner Information</p>
                </div>

                <div className="flex flex-col gap-5 items-center">
                    <div className="flex gap-3 justify-center items-center ">
                        <div className="min-w-[60px] h-full rounded-full overflow-hidden">
                            <Image src="/agent1.jpg" alt="hello" width={0} height={0} className="w-[60px] h-[60px]" unoptimized></Image>
                        </div>
                        <div>
                            <p className="text-[16px] text-[#111116] leading-[140%] whitespace-nowrap">Ronald Richards</p>
                            <p className="text-[#9D98A0] text-[14px] leading-[22px]">Address</p>
                        </div>
                    </div>
                    <div className="bg-[#F0A300] flex gap-3 px-5 py-3 rounded-xl">
                        <Image src="/phone.png" alt="hello" width={0} height={0} className="h-[20px] w-[20px]"></Image>
                        <p className="font-semibold text-white text-[16px]">+977 9867543210</p>
                    </div>
                </div>
            </div>
    )
}