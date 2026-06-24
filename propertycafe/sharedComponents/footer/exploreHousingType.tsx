import Image from "next/image"

type UniqueHousings = {
    uniqueHousingOptions : string[];
}


export default function ExploreHousingType({
    uniqueHousingOptions,
} :UniqueHousings){
    return(
        <div className="mt-3 flex gap-10 flex-wrap">
                {
                    uniqueHousingOptions.map((type,id)=>(
                        <div key={id} className="flex items-center  gap-3 w-fit pr-6 border-r-[1px] border-[#F0EAF4] cursor-pointer">
                    <p className="text-[14px] leading-[140%]">{type}</p>
                    <Image src="/downarrow.png" alt="droparrow" width={0} height={0} className="w-[8px] h-[8px]" ></Image>
                </div>
                    ))
                }
            </div>
    )
}