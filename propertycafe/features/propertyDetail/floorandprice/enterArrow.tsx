import Image from "next/image"

type IsBigMobile = {
    isBigMobile: boolean
    isMobile: boolean
}
export default function EnterArrow({
    isBigMobile,
    isMobile
} : IsBigMobile){
    return(
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
    )
}