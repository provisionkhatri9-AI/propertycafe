import { useSelector,useDispatch } from "react-redux"
import { RootState } from "@/app/store/store"
import { setSelected } from "@/app/store/slices/exporeNavSlice"
import { catagories} from "../../../../data/exploreCardData"



type isMobileWidth={
    isMobile: boolean
}

export default function ExploreNav({
    isMobile ,
} : isMobileWidth){

    const visible = isMobile? catagories.slice(0,5) : catagories
                                    
    const dispatch = useDispatch()
    const selected = useSelector(
        (state:RootState) => state.exploreNav.selected
    )


    return(
        <div className="flex gap-3  text-[clamp(0.8rem,4vw,1rem)] ">
        
                            {
                                
                                visible.map((catagori)=>(
                                    <div key={catagori} className="flex flex-col ">
                                <button type="button" onClick={()=>dispatch(setSelected(catagori))} className={`leading-[140%] ${selected === catagori ? "bg-gradient-to-l  text-start from-[#A044FF] to-[#6A3093] bg-clip-text text-transparent" : "text-[#787D9C] cursor-pointer hover:-translate-y-[2px] hover:scale-103 transition-all duration-300"} `}>
                                {catagori}
                                </button>
                                {
                                    selected === catagori&&
                                    <div className="h-1 rounded-xl w-full bg-gradient-to-l from-[#A044FF] to-[#6A3093]">
        
                                </div>
                                }
                            </div>
                                ))
                            }
        
                           
                        </div>
    )
}