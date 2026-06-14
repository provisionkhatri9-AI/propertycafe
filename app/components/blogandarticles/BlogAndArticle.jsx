import Image from "next/image"
export default function BlogAndArticle(){

    return(
        <div className="mb-10 w-full">
            <div className="mb-2">
                <p className="text-[clamp(1.5rem,4vw,2rem)]">Blogs and Articles</p>
            </div>

            <div className="flex w-[80vw] overflow-x-auto gap-6">
                <div className="flex flex-col w-[320px] gap-1">
                    <div className="rounded-xl overflow-hidden w-[300px] h-fit ">
                        <Image src="/bolg1.jpg" alt="helo" width={300} height={300}></Image>
                    </div>

                    <div>
                        <p className="font-bold text-[16px] leading-[140%] ">Buying Property in Nepal? Avoid These 5 Legal Pitfalls!</p>
                    </div>

                    <div className="flex gap-2">
                        <p className="text-[12px] leading-[140%]">Jan 3,2025</p>
                        <p className="text-[12px] leading-[140%] text-[#6A3093]">4 min read</p>
                    </div>

                    <div>
                        <p className="text-[#787D9C] text-[13px] font-[semibold] leading-[140%]">Lorem ipsum dolor sit amet
                        consectetur. Vel parturient amet proin mauris gravida porttitor. 
                        In urna turpis amet pretium etiam faucibus malesuada</p>
                        <p className="font-semibold text-[13px] text-[#F0A300] leading-[140%]">...Read More</p>
                    </div>
                </div>

                <div className="flex flex-col w-[320px] gap-1">
                    <div className="rounded-xl overflow-hidden w-[300px] h-fit ">
                        <Image src="/bolg1.jpg" alt="helo" width={300} height={300}></Image>
                    </div>

                    <div>
                        <p className="font-bold text-[16px] leading-[140%] ">Buying Property in Nepal? Avoid These 5 Legal Pitfalls!</p>
                    </div>

                    <div className="flex gap-2">
                        <p className="text-[12px] leading-[140%]">Jan 3,2025</p>
                        <p className="text-[12px] leading-[140%] text-[#6A3093]">4 min read</p>
                    </div>

                    <div>
                        <p className="text-[#787D9C] text-[13px] font-[semibold] leading-[140%]">Lorem ipsum dolor sit amet
                        consectetur. Vel parturient amet proin mauris gravida porttitor. 
                        In urna turpis amet pretium etiam faucibus malesuada</p>
                        <p className="font-semibold text-[13px] text-[#F0A300] leading-[140%]">...Read More</p>
                    </div>
                </div>

                <div className="flex flex-col w-[320px] gap-1">
                    <div className="rounded-xl overflow-hidden w-[300px] h-fit ">
                        <Image src="/bolg1.jpg" alt="helo" width={300} height={300}></Image>
                    </div>

                    <div>
                        <p className="font-bold text-[16px] leading-[140%] ">Buying Property in Nepal? Avoid These 5 Legal Pitfalls!</p>
                    </div>

                    <div className="flex gap-2">
                        <p className="text-[12px] leading-[140%]">Jan 3,2025</p>
                        <p className="text-[12px] leading-[140%] text-[#6A3093]">4 min read</p>
                    </div>

                    <div>
                        <p className="text-[#787D9C] text-[13px] font-[semibold] leading-[140%]">Lorem ipsum dolor sit amet
                        consectetur. Vel parturient amet proin mauris gravida porttitor. 
                        In urna turpis amet pretium etiam faucibus malesuada</p>
                        <p className="font-semibold text-[13px] text-[#F0A300] leading-[140%]">...Read More</p>
                    </div>
                </div>

                <div className="flex flex-col w-[320px] gap-1">
                    <div className="rounded-xl overflow-hidden w-[300px] h-fit ">
                        <Image src="/bolg1.jpg" alt="helo" width={300} height={300}></Image>
                    </div>

                    <div>
                        <p className="font-bold text-[16px] leading-[140%] ">Buying Property in Nepal? Avoid These 5 Legal Pitfalls!</p>
                    </div>

                    <div className="flex gap-2">
                        <p className="text-[12px] leading-[140%]">Jan 3,2025</p>
                        <p className="text-[12px] leading-[140%] text-[#6A3093]">4 min read</p>
                    </div>

                    <div>
                        <p className="text-[#787D9C] text-[13px] font-[semibold] leading-[140%]">Lorem ipsum dolor sit amet
                        consectetur. Vel parturient amet proin mauris gravida porttitor. 
                        In urna turpis amet pretium etiam faucibus malesuada</p>
                        <p className="font-semibold text-[13px] text-[#F0A300] leading-[140%]">...Read More</p>
                    </div>
                </div>

                
                
            </div>
        </div>
    )
}