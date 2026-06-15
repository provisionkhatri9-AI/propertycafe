import Image from "next/image"

export default function Location(){
    return(
        <div className="flex flex-col gap-5">
            <div>
                <p className="font-semibold text-[18px] leading-[140%] text-[#4B4B4B]">Location</p>
            </div>

            <div className="-translate-x-4">
                <Image src="/mappofour.png" alt="hello" width={0} height={0} className="w-full md:h-100  " unoptimized></Image>
            </div>
        </div>
    )
}