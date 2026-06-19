import Image from "next/image"

type isMobileType ={
    isMobile: boolean
}

export default function Location({
    isMobile 
}: isMobileType){
    return(
        <div className="flex flex-col gap-5">
            <div>
                <p className="font-semibold text-[18px] leading-[140%] text-[#4B4B4B]">Location</p>
            </div>

            <div className={`relative ${isMobile? "" : "-translate-x-4"} w-[clamp(200px,90vw,800px)] h-[300px]`}>
                <Image src="/mappofour.png" alt="hello" fill className="object-fit"></Image>
            </div>
        </div>
    )
}