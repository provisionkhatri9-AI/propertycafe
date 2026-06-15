import Image from "next/image"
import Button from "../../../../components/Button"
import { useMediaQuery } from "react-responsive"


export default function SearchFind(){

    const isMobile = useMediaQuery({maxWidth:850})

    return(

        <div className={` mb-10 flex justify-between px-4 py-5 rounded-xl shadow ${isMobile? "flex-col items-center" : "flex-row"}`}>
            <div className="flex flex-col">
                <div>
                    <p className="font-bold text-[clamp(1.5rem,4vw,2rem)] leading-[140%] text-[#A044FF]">Can't find what you are looking for?</p>
                </div>
                <div>
                    <p className="text-[16px] text-[#787D9C] leading-[140%]">Let us help you discover your ideal property tailored to your needs and preferences.</p>
                </div>

                {
                    !isMobile &&
                    <Button></Button>
                }
            </div>

            <div className="flex flex-col items-center">
                <Image src="/searchallhome.png" alt="" width={200} height={200}></Image>
                {
                    isMobile&&
                    <Button></Button>
                }
            </div>
        </div>
    )
}