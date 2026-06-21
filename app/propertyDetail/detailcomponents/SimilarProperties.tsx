import FeaturedPropertyCard from "@/app/homecomponents/featuredpropertycomponents/FeaturedPropertyCard"

export default function SimilarProperties(){
    return(
        <div className="flex flex-col gap-1 ">           <div>
                <p className="leading-[38px] font-semibold text-[#111116] text-[clamp(1.4rem,2vw,2rem)]">Similar Properties</p>
            </div>

            <div>
                <p className="text-[14px] leading-[140%] text-[#787D9C]">Our best picks tailored for you</p>
            </div>

            <div>
                <FeaturedPropertyCard widthClass="w-[90.5vw]" type="similar"></FeaturedPropertyCard>
            </div>
        </div>
    )
}