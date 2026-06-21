import Image from "next/image"
import { blogsData } from "@/data/blogAndArticleData"; 

interface Blog  {
  image: string;
  title: string;
  date: string;
  readTime: string;
  description: string;
}

const data :Blog[] = blogsData



export default function BlogAndArticle(){

    return(
        <div className="mb-10 w-full">
            <div className="mb-2">
                <p className="text-[clamp(1.3rem,4vw,2rem)] text-[#111116]">Blogs and Articles</p>
            </div>

            <div className="flex w-[90vw]  overflow-x-auto scrollbar-hide gap-6">
                {
                    data.map((items,key)=>(
                        <div key={key} className="flex flex-col max-w-[380px] min-w-[270px]  gap-1 group hover:-translate-y-[2px] transition-all cursor-pointer duration-300" >
                    <div className="rounded-xl overflow-hidden max-w-[380px] min-w-[270px] h-fit ">
                        <Image src={items.image} alt="helo" width={300} height={370} className="w-full h-full group-hover:scale-101  transition-all duration-500"></Image>
                    </div>

                    <div className="max-w-[330px] ">
                        <div>
                        <p className="font-bold text-[16px] leading-[140%] ">{items.title}</p>
                    </div>

                    <div className="flex gap-2">
                        <p className="text-[12px] leading-[140%]">{items.date}</p>
                        <p className="text-[12px] leading-[140%] text-[#6A3093]">{items.readTime}</p>
                    </div>

                    <div>
                        <p className="text-[#787D9C] text-[13px] font-[semibold] leading-[140%]">{items.description}</p>
                        <p className="font-semibold text-[13px] text-[#F0A300] leading-[140%]">...Read More</p>
                    </div>
                    </div>
                </div>

                    ))
                }
                
            </div>
        </div>
    )
}