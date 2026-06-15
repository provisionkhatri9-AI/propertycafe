import Image from "next/image"
export default function InterestedFillUp(){
    return(
        <div className="shadow h-fit rounded-xl p-7">
        <div className="flex flex-col gap-10 items-center pt-2">
            <div className="flex flex-col gap-2 items-center">
                <p className="font-semibold text-[18px] leading-[140%] text-[#111116]">Interested in this property?</p>
                <p className="text-[#9D98A0] text-[16px] leading-[140%]">Get instant details, pricing & site visit slots!</p>
            </div>

            <div className="w-full self-start flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <p className="text-[#111116] text-[14px] leading-[140%]">Enter Phone Number</p>
                    <div className="pl-[15px] py-[6px] w-full flex gap-4 border-[1px] rounded-2xl border-[#F0EAF4]">
                        <div className="flex items-center gap-2">
                            <Image src="/nepalflag.png" alt="hello" width={0} height={0} className="w-[18px] h-[20px]"></Image>
                            <Image src="/downarrow.png" alt="heelo" width={0} height={0} className="w-[12px] h-[12px]"></Image>
                        </div>
                        <input placeholder="Phone Number" className="focus:outline-none placeholder:text-[#9D98A0] placeholder:text-[12px] px-2 py-1  w-full" type="text" />
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <p className="text-[#111116] text-[14px] leading-[140%]">Enter your Name</p>
                    <div className="pl-[15px] py-[4px] w-full flex gap-4 border-[1px] rounded-2xl border-[#F0EAF4] justify-center items-center">
                        <input placeholder="Name" className="focus:outline-none placeholder:text-[#9D98A0] placeholder:text-[12px] px-2 py-1  w-full" type="text" />
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <p className="text-[#111116] text-[14px] leading-[140%]">Enter your Email</p>
                    <div className="pl-[15px] py-[4px] w-full flex gap-4 border-[1px] rounded-2xl border-[#F0EAF4] justify-center items-center">
                        <input placeholder="Email" className="focus:outline-none placeholder:text-[#9D98A0] placeholder:text-[12px] px-2 py-1  w-full" type="text" />
                    </div>
                </div>

                <div className="w-full ">
                    <div className="bg-gradient-to-l rounded-2xl from-[#A044FF] to-[#6A3093] flex items-center justify-center  py-3">
                        <p className="text-white font-semibold leading-[140%] text-[16px] ">Get CallBack Now</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}