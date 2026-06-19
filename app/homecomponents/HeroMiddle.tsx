type HeroProps = {
    className?: string
}


export default function HeroMiddle({className}: HeroProps){
    return(
        <div>
            <div className={`${className} flex flex-col gap-[6px] items-center`}>
                <p className="text-[clamp(0.8rem,2vw,1.2rem)] md:text-[clamp(0.8rem,4vw,1.1rem)] text-[#A044FF]">But,Sell,Invest-Seamlessly</p>
                <p className=" font-semibold text-[40px] text-white leading-[140%] text-[clamp(1.2rem,5vw,2.6rem)] md:text-[clamp(1.2rem,4vw,2.7rem)] whitespace-nowrap ">Find Your Dream Home Today</p>
            </div>
        </div>
    )
}