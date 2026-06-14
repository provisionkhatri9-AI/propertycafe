import { useMediaQuery } from "react-responsive"
import { useDispatch,useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import { openModal,closeModal } from "@/app/store/slices/callbackandschedyle"
import RequestCall from "./requestcall/Requsetcall"

export default function SchedulingandCalback(){
    const isMobile = useMediaQuery({maxWidth:600})
    const dispatch = useDispatch()
    const activemodel = useSelector(
        (state:RootState) => state.callRequest.activemodal
    )
    return(
        <>
        <div className={`${isMobile ?"justify-between w-full mb-3 " : "border-1 border-[#F0EAF4]  w-fit"} px-3 py-2 rounded-xl flex gap-2`}>
                                <div className={`px-3 py-2 ${isMobile? "w-full" :"w-fit"} rounded-xl bg-gradient-to-l from-[#A044FF] to-[#6A3093] flex items-center justify-center`}
                                    onClick={()=>dispatch(
                                        activemodel === "callback"?
                                        closeModal():
                                        openModal("callback")
                                    )}
                                    >
                                    <p className="text-white font-semibold">Request Callback</p>
                                </div>
                                <div className={`bg-gradient-to-l px-[2px] py-[2px] flex items-center justify-center from-[#A044FF] to-[#6A3093] ${isMobile? "w-full" :"w-fit"} rounded-[14px]`}>
                                    <div className={`bg-white rounded-xl ${isMobile? "px-[46px]" : "px-[10px]"} py-[8px]`} onClick={()=>dispatch(activemodel==="schedule" ? closeModal() : openModal("schedule"))}>
                                        <p>Schedule Visit</p>
                                    </div>
                                </div>
     
                            </div>
                            {activemodel == "callback" && <RequestCall/>}
    </>
    )
}