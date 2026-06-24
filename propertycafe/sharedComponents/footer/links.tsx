import Image from "next/image"
import { footerLinks } from "@/data/exploreMoreData";
import Link from "next/link";
export default function Links(){
        return(
            <div>
                <div>
                <div className="flex gap-4 pt-2">
                    <Link className="w-[24px] h-[24px]" href="/"><Image src="/facebook.png" alt="facebook" width={24} height={14} className="w-full h-full" ></Image></Link>
                    <Link className="w-[24px] h-[24px]" href="/"><Image src="/instagram1.png" alt="instagram" width={24} height={24} className="w-full h-full" ></Image></Link>
                    <Link className="w-[24px] h-[24px]" href="/"><Image src="/youtube.png" alt="youtube" width={24} height={24} className="w-full h-full" ></Image></Link>
                    <Link className="w-[24px] h-[24px]" href="/"><Image src="/twitter.png" alt="twitter" width={24} height={24} className="w-full h-full" ></Image></Link>
                   
                </div>
            </div>
            <div className="flex justify-between pt-3 whitespace-nowrap flex-wrap">
                {
                    footerLinks.map((item,id)=>(
                        <p key={id} className="small-greytext hover-lift hover:scale-101 transition-all  duration-300 cursor-pointer">{item}</p>
                    ))
                }
                
            </div>

            <div className="flex items-center justify-center flex-col gap-4 pt-3">
                <p className="text-[24px] leading-[140%] font-bold "><span className="text-[#A044FF]">Property</span>CafeNepal.com</p>
                <p className="text-[#787D9C] text-[12px] leading-[140%] ">@2025 Property Cafe Nepal. All Rights Reserved</p>
            </div>
            </div>
        )
}