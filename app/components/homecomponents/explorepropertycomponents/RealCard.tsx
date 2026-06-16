
import Image from "next/image"

type RealCardProps = {
  image: string;
  title: string;
  location: string;
  category: string;
  isMobile: boolean;
};
export default function RealCard({
    title,
    image,
    isMobile,
    category,
    location
    
} : RealCardProps){
     
    return(
        <div className="  rounded-[12px] min-w-[240px]  overflow-hidden ">
                            <div className="relative  ">
                            
                                <Image src={image} alt="hekko" width={0} height={0} className="w-[333px] h-[250px] "  unoptimized></Image>
        
                                <div className="absolute bg-black/20 h-full w-full inset-0  z-10"></div>
                            
        
                            <div className="flex w-[90%] justify-between py-3 px-2 absolute z-20 bottom-4 bg-white rounded-xl left-1/2 -translate-x-1/2">
                                <div className="flex flex-col">
                                    <p className={`leading-[140%] ${isMobile? "text-[12px]" : "text-[15px]"} font-medium`}>{title}</p>
                                    <p className={`leading-[140%] ${isMobile? "text-[10px]" : "text-[12px]"}  text-[#787D9C]`}>{location}</p>
                                </div>
        
                                <div className={`bg-[#F0EAF4] flex items-center justify-center rounded-full border-[0.5px] border-[#D1BFDE] ${isMobile? "h-[24px] w-[24px]" : "h-[34px] w-[34px]"}`}>
                                    <img src="/updiagarrow1.png" alt="" className="h-4 w-3" />
                                </div>
                            </div>
        
                            <div className="absolute inset-0 top-5 left-5 z-20">
                                <div className="bg-[#6A7FDB] px-[12px] py-[4px] w-fit rounded-[8px]">
                                    <p className="text-[12px] text-white">{category}</p>
                                </div>
        
                            </div>
                        </div>
                    </div>
        
    )
}