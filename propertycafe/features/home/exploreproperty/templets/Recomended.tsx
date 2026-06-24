import SliderBox from "@/sharedComponents/slideBox/sliderBox"

export default function Recomended() {

    return (
        <div className="">
            <div>
                <p className="head-textstyle">Recommended For You</p>

            </div>
            <div>
                <p className=" text-[14px] text-[#787D9C] leading-[140%]">Our best picks tailored for you</p>
            </div>

            <div className="mt-5 ">
                <SliderBox type="recommended"></SliderBox>
            </div>
        </div>
    )
}