type HeroProps = {
    className?: string
}


export default function HeroMiddle({className}: HeroProps){
    return(
        <div>
            <div className={`${className} flex flex-col gap-[6px] items-center`}>
                <p className="text-[16px] text-[#A044FF]">But,Sell,Invest-Seamlessly</p>
                <p className=" font-semibold text-[40px] text-white leading-[140%] text-[clamp(2rem,4vw,2.7rem)] whitespace-nowrap ">Find Your Dream Home Today</p>
            </div>
        </div>
    )
}