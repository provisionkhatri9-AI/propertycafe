import {services} from "@/data/serviceData"
import Image from "next/image"


export default function Service(){

    return(
        <div className="pb-10 flex flex-col gap-3 items-start  w-full">
            <div>
                <h1 className="font-bold text-[clamp(1.3rem,3vw,2rem)] hover:text-[#7230B5] cursor-pointer transition-colors duration-300">Our Services</h1>
            </div>

            <div className="flex flex-wrap items-center justify-center w-full gap-11 py-3">
                {
                    services.map((service,id)=>(
                        <div key={id} className="bg-gradient-to-b from-[#FFFFFF] to-[#F0EAF4] w-[250px] p-4   rounded-xl flex flex-col gap-5 items-center justify-center hover:scale-101 hover:-translate-y-[2px] shadow-[0px_0px_7px_rgba(0,0,0,0.20)] hover:shadow-[0px_0px_20px_rgba(0,0,0,0.20)] transition-all duration-300">
                    <div className="h-[200px] flex items-center justify-center">
                        <Image src={service.image} alt="" width={150} height={150}></Image>
                    </div>

                    <div className="whitespace-nowrap">
                        <p className="font-semibold text-[#1A2E35] leading-[140%] text-[16px] ">{service.title}</p>
                    </div>

                    <div>
                        <p className="text-[#9D98A0] text-[12px] leading-[140%]">{service.description} </p>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
    )
}