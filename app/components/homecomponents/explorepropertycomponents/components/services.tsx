
import Image from "next/image"


export default function Service(){

    return(
        <div className="pb-10 flex flex-col gap-3 items-start  w-full">
            <div>
                <h1 className="font-bold text-[clamp(1.3rem,4vw,2rem)]">Our Services</h1>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
                <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F0EAF4] w-[250px] p-4  shadow rounded-xl flex flex-col gap-5 items-center justify-center">
                    <div className="h-[200px] flex items-center justify-center">
                        <Image src="/homesearch.png" alt="" width={150} height={150}></Image>
                    </div>

                    <div className="whitespace-nowrap">
                        <p className="font-semibold text-[#1A2E35] leading-[140%] text-[16px] ">Property valuation</p>
                    </div>

                    <div>
                        <p className="text-[#9D98A0] text-[12px] leading-[140%]">Lorem ipsum dolor sit amet consectetur. Vel parturient amet proin mauris gravida 
                            porttitor. In urna turpis amet pretium etiam faucibus malesuada. </p>
                    </div>
                </div>

                <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F0EAF4] w-[250px] p-4  shadow rounded-xl flex flex-col gap-5 items-center justify-center">
                    <div className="h-[200px] flex items-center justify-center">
                        <Image src="/twopeople.png" alt="" width={150} height={150}></Image>
                    </div>

                    <div className="whitespace-nowrap">
                        <p className="font-semibold text-[#1A2E35] leading-[140%] text-[16px] ">Home Loan</p>
                    </div>

                    <div>
                        <p className="text-[#9D98A0] text-[12px] leading-[140%]">Lorem ipsum dolor sit amet consectetur. Vel parturient amet proin mauris gravida 
                            porttitor. In urna turpis amet pretium etiam faucibus malesuada. </p>
                    </div>
                </div>

                <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F0EAF4] w-[250px] p-4  shadow rounded-xl flex flex-col gap-5 items-center justify-center">
                    <div className="h-[200px] flex items-center justify-center">
                        <Image src="/360home.png" alt="" width={150} height={150}></Image>
                    </div>

                    <div className="whitespace-nowrap">
                        <p className="font-semibold text-[#1A2E35] leading-[140%] text-[16px] ">Property 360</p>
                    </div>

                    <div>
                        <p className="text-[#9D98A0] text-[12px] leading-[140%]">Lorem ipsum dolor sit amet consectetur. Vel parturient amet proin mauris gravida 
                            porttitor. In urna turpis amet pretium etiam faucibus malesuada. </p>
                    </div>
                </div>

                <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F0EAF4] w-[250px]  p-4  shadow rounded-xl flex flex-col gap-5 items-center justify-center">
                    <div className="h-[200px] flex items-center justify-center">
                        <Image src="/buildingpiller.png" alt="" width={150} height={150} className=""></Image>
                    </div>

                    <div className="">
                        <p className="font-semibold text-[#1A2E35] leading-[140%] text-[16px] ">Engineering and Designe</p>
                    </div>

                    <div>
                        <p className="text-[#9D98A0] text-[12px] leading-[140%]">Lorem ipsum dolor sit amet consectetur. Vel parturient amet proin mauris gravida 
                            porttitor. In urna turpis amet pretium etiam faucibus malesuada. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}