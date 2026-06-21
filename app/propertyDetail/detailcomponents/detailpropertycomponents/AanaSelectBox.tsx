import { setSelectedId } from "@/app/store/slices/annaSlice"
import { useSelector,useDispatch } from "react-redux"
import { RootState } from "@/app/store/store"


type AnaSelectBox={
    id: number,
    area : string
}

export default function AnnaSelectBox({
    id,
    area
} : AnaSelectBox){

     const selectedID = useSelector(
        (state:RootState) => state.aanaSlice.setSelectedId
    )

    const dispatch = useDispatch()
    return(
        <div key={id} onClick={()=>dispatch(setSelectedId(id))} className={`py-2 px-6 w-fit  h-[45px] ${selectedID === id ? "bg-[#F0EAF4] text-[#6A3093]" :""} rounded-xl  flex items-center cursor-pointer justify-center`}>
            <p className="text-[14px] leading-[140%] ">{area}</p>
        </div>
    )
}