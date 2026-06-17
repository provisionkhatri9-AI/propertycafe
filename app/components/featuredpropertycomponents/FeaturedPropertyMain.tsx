
import FeaturedPropertyCard from "./FeaturedPropertyCard";



export default function FeaturedPropertyMain(){
    
   
    
    return(
        <div className="w-[100%] mb-[40px] relative mt-[40px]">
            <div className="flex w-full justify-between items-center mb-4">
                <div>
                    <p className="leading-[38px] font-semibold text-[#111116] text-[clamp(1.3rem,3vw,2rem)] hover:text-[#7230B5] transition-all duration-300 cursor-pointer">Featured Property</p>
                    <p className="text-[14px] leading-[140%] text-[#787D9C]">Top searches of this week</p>
                </div>

                <div>
                    <p className="text-[clamp(0.85rem,4vw,1rem)] leading-[140%] text-[#F0A300] font-semibold cursor-pointer">See all</p>
                </div>
            </div>

            

            <div className="w-full">
                <FeaturedPropertyCard type="feature"></FeaturedPropertyCard>
            </div>

            

            
        </div>
    )
}