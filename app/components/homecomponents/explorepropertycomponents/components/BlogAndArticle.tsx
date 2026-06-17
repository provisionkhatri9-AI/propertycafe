import Image from "next/image"

interface Blog {
  image: string;
  title: string;
  date: string;
  readTime: string;
  description: string;
}

const blogs: Blog[] = [
  {
    image: "/bolg1.jpg",
    title: "Buying Property in Nepal? Avoid These 5 Legal Pitfalls!",
    date: "Jan 3, 2025",
    readTime: "4 min read",
    description:
      "Learn the most common legal mistakes property buyers make in Nepal and how to protect your investment before signing any agreement.",
  },
  {
    image: "/blog2.jpg",
    title: "How to Get a Home Loan in Nepal: A Complete Guide",
    date: "Feb 15, 2025",
    readTime: "6 min read",
    description:
      "Everything you need to know about home loan eligibility, required documents, interest rates, and the application process.",
  },
  {
    image: "/blog3.jpg",
    title: "Top 10 Areas to Invest in Kathmandu Real Estate",
    date: "Mar 12, 2025",
    readTime: "5 min read",
    description:
      "Explore the fastest-growing locations in Kathmandu Valley that offer strong rental demand and long-term property appreciation.",
  },
  
];

export default function BlogAndArticle(){

    return(
        <div className="mb-10 w-full">
            <div className="mb-2">
                <p className="text-[clamp(1.3rem,4vw,2rem)] text-[#111116]">Blogs and Articles</p>
            </div>

            <div className="flex w-[90vw]  overflow-x-auto scrollbar-hide gap-6">
                {
                    blogs.map((items,key)=>(
                        <div key={key} className="flex flex-col max-w-[380px] min-w-[270px]  gap-1 group hover:-translate-y-[2px] transition-all cursor-pointer duration-300" >
                    <div className="rounded-xl overflow-hidden max-w-[380px] min-w-[270px] h-fit ">
                        <Image src={items.image} alt="helo" width={380} height={370} className="group-hover:scale-101  transition-all duration-500"></Image>
                    </div>

                    <div className="max-w-[330px] ">
                        <div>
                        <p className="font-bold text-[16px] leading-[140%] ">{items.title}</p>
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

                    ))
                }
                
            </div>
        </div>
    )
}