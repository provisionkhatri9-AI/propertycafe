export default function Overview(){
    return(
        <div className="flex flex-col gap-7">
            <div className="flex gap-3">
            <div className="w-[100px] h-[44px]">
                <div className="flex items-center justify-center bg-gradient-to-r from-[#A044FF] to-[#6A3093] bg-clip-text text-transparent">
                    <p className="text-[16px] leading-[140%]">Overview</p>
                </div>
                <div className="bg-gradient-to-l mt-2 from-[#A044FF] to-[#6A3093] h-1 rounded-xl w-full"></div>
                </div>

                <div className="w-[100px] h-[44px]">
                    <div className="flex items-center justify-center">
                        <p className="text-[16px] leading-[140%] text-[#787D9C]">Aminities</p>
                    </div>
                    
                </div>

                <div className="w-[100px] h-[44px]">
                    <div className="flex items-center justify-center">
                        <p className="text-[16px] leading-[140%] text-[#787D9C]">Location</p>
                    </div>
                </div>
    
                
            </div>

            <div>
                <p className="font-semibold text-[18px] leading-[140%] text-[#34373D]">Bhandari Niwas</p>
            </div>

            <div>
                <p className="text-[16px] text-[#787D9C] leading-[140%]">Lorem ipsum dolor sit amet consectetur. Auctor platea commodo metus donec quam eros massa odio. Odio tristique cursus sed venenatis ac eget quam arcu adipiscing. Rhoncus nulla ullamcorper condimentum mi condimentum duis nunc nibh.Lorem ipsum dolor sit amet consectetur. 
                    Auctor platea commodo metus donec quam eros massa odio. Odio tristique cursus sed venenatis ac eget quam arcu adipiscing. Rhoncus nulla ullamcorper condimentum mi condimentum duis nunc nibh.Lorem ipsum dolor sit amet consectetur. Auctor platea commodo metus 
                    donec quam eros massa odio. Odio tristique cursus sed venenatis ac eget quam arcu adipiscing. Rhoncus nulla ullamcorper condimentum mi condimentum duis nunc nibh<span className="text-[#F0A300] font-bold text-[16px] leading-[140%]">...Read More</span></p>
            </div>

            <div>
                <p className="text-[16px] text-[#787D9C] leading-[140%]">Neo-classical design house are now exclusively availabe on sale. Hurry up, Only 6 units remaining. </p>
            </div>
        </div>
    )
}