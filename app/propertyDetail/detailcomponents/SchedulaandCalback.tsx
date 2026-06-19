import { useMediaQuery } from "react-responsive"
import { useDispatch,useSelector } from "react-redux"
import { RootState } from "@/app/store/store" 
import { openModal,closeModal } from "@/app/store/slices/callbackandschedule"
import RequestCall from "./Requsetcall"

export default function SchedulingandCalback(){
    const isMobile = useMediaQuery({maxWidth:600})
    const isMobile457 = useMediaQuery({maxWidth:457})


    const dispatch = useDispatch()
    const activemodel = useSelector(
        (state:RootState) => state.callRequest.activemodal
    )
    return(
        <>
        <div className={`${isMobile ?"justify-between w-full mb-3 " : "border-1 border-[#F0EAF4]  w-fit"} px-3 py-2 rounded-xl flex gap-2 relative whitespace-nowrap`}>
                                <div className={`px-3 py-2 ${isMobile? "w-full" :"w-fit"} rounded-xl bg-gradient-to-l from-[#A044FF] to-[#6A3093] flex items-center justify-center hover:-translate-y-[2px] transition-all duration-300 cursor-pointer`}
                                    onClick={()=>dispatch(
                                        activemodel === "callback"?
                                        closeModal():
                                        openModal("callback")
                                    )}
                                    >
                                    <p className="text-white font-semibold text-[clamp(0.8rem,4vw,1rem)]">Request Callback</p>
                                </div>
                                <div className={`bg-gradient-to-l px-[2px] py-[2px] flex items-center justify-center from-[#A044FF] to-[#6A3093] ${isMobile457?"w-fit": isMobile? "w-full" :"w-fit"} rounded-[14px] hover:-translate-y-[2px] transition-all duration-300 cursor-pointer`}>
                                    <div className={`bg-white rounded-xl ${isMobile457? " px-[15px] " : isMobile? "px-[68px]" : "px-[10px]"} py-[8px]`} onClick={()=>dispatch(activemodel==="schedule" ? closeModal() : openModal("schedule"))}>
                                        <p className="text-semibold text-[clamp(0.8rem,4vw,1rem)]">Schedule Visit</p>
                                    </div>
                                </div>

                                <div className="absolute shadow rounded-xl bg-white z-100 top-20 rounded">
                                     {activemodel == "callback" && <RequestCall/>}
                                </div>
                                
     
                            </div>
                           
    </>
    )
}