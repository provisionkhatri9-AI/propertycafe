import Image from "next/image"

type arrowType = {
    type?: "roomandsize"
    onClick : ()=> void;
    direction: "left" |"right"
}
export default  function ArrowComp({
    type,
    onClick,
    direction
} : arrowType){
    return(
         <div onClick={onClick} className=" border-2  w-fit h-fit border-[2px] overflow-hidden z-[200] border-white rounded-full  right-0 cursor-pointer">
                                <div className={` ${type === "roomandsize" ? "bg-[#FFD1DC]/40 " : "bg-gradient-to-b from-[#FFFFFF1C] to-[#0000000A] backdrop-blur-2xl"}   z-[200] px-1 py-1`}>
                                    <div className="px-2 py-2 bg-white rounded-full">
                                        <Image src="/downarrow.png" alt="hello" width={0} height={0} className={`${direction == "left" ? "rotate-90" : "rotate-270"} w-[10px] h-[10px]`}></Image>
                                    </div>
                                </div>
                            </div>
    )
}