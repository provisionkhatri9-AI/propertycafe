import FeaturedPropertyCard from "@/app/components/featuredpropertycomponents/FeaturedPropertyCard"

export default function (){

    return(
        <div className="">
            <div>
                <p className="font-semibold text-[clamp(1.3rem,4vw,2rem)]">Recommended For You</p>

            </div>
            <div>
                <p className=" text-[14px] text-[#787D9C] leading-[140%]">Our best picks tailored for you</p>
            </div>

            <div className="mt-5 ">
                <FeaturedPropertyCard></FeaturedPropertyCard>
            </div>
        </div>
    )
}