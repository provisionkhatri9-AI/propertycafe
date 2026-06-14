import FeaturedPropertyCard from "./FeaturedPropertyCard";

export default function FeaturedPropertyMain(){
    return(
        <div className="w-[100%] mb-[40px] mt-[40px]">
            <div className="flex w-full justify-between items-center mb-4">
                <div>
                    <p className="leading-[38px] font-semibold text-[#111116] text-[clamp(1.4rem,2vw,2rem)]">Featured Property</p>
                    <p className="text-[14px] leading-[140%] text-[#787D9C]">Top searches of this week</p>
                </div>

                <div>
                    <p className="text-[17px] leading-[140%] text-[#F0A300] font-semibold">See all</p>
                </div>
            </div>

            <div className="">
                <FeaturedPropertyCard ></FeaturedPropertyCard>
            </div>
        </div>
    )
}