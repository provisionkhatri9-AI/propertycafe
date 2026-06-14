import Image from "next/image"
export default function NotSureYet(){
    return(
        <div className="flex gap-2 w-full">
            <Image src="/featuredproduct1.jpg" alt="hello" width={0} height={0} className="w-[127px] rounded-xl h-[87px]" unoptimized></Image>
            <div className="flex flex-col gap-1 ">
                <p className="font-medium  leading-[140%]">Not yet sure?</p>
                <p className="text-[12px] leading-[140%] text-[#787D9C]">Save this property ro review Later. Great decisions take time!</p>
                <div className={`flex gap-1 `}>
                                        <div className="flex items-center shadow  gap-1 w-fit rounded-md h-fit py-1 px-3  bg-white">
                                            <Image src="/love.png" alt="hello" width={0} height={0} className="w-[14px] h-[14px]"></Image>
                                            <p className="text-[14px] leading-[140%] ">Like</p>
                                        </div>
                
                                        <div className="flex items-center shadow gap-1 rounded-md w-fit h-fit px-3 py-1  bg-white">
                                            <Image src="/share.png" alt="hello" width={0} height={0} className="w-[12px] h-[12px]"></Image>
                                            <p className="text-[14px] leading-[140%] ">Share</p>
                                        </div>
                                       
                                    </div>
            </div>
        </div>
    )
}