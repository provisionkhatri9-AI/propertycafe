

import Image from "next/image"

import { useMediaQuery } from "react-responsive"

export default function Banner(){

    const isMobile = useMediaQuery({maxWidth:845})
    return(
        <div className={`mb-[40px] bg-[#380CCD] w-full h-full rounded-[12px] flex ${isMobile? "flex-col justify-center items-start gap-3" : "flex-row"} justify-between py-6 px-6 relative overflow-hidden`}>
            <div className={`flex ${isMobile? "flex-col items-start" : "flex-row"} items-center gap-2`}>
                <div className="flex -space-x-3 order-1">
                    <Image src="/agent1.jpg" alt="hello" width={45} height={45} className="rounded-full"></Image>
                    <Image src="/agent2.jpg" alt="hello" width={45} height={45} className="rounded-full"></Image>
                    <Image src="/agent3.jpg" alt="hello" width={45} height={45} className="rounded-full"></Image>
                    <Image src="/agent4.jpg" alt="hello" width={45} height={45} className="rounded-full"></Image>
                    

                </div>

                <div >
                    <p className="font-semibold text-[16px] leading-[140%] text-white">Find a Trusted Agent</p>
                    <p className="text-[14px] leading-[140%] text-white">Find trusted agents awarded for their excillent performance</p>
                </div>
            </div>

            <div className="flex items-center w-fit px-3 py-2 rounded-xl bg-white gap-3">
                <div className="">
                    <p className="font-semibold text-[#6A3093]">Find Agent</p>
                </div>

                <div>
                    <Image src="/downarrow.png" alt="hello" height={10} width={10} className="rotate-270"></Image>
                </div>

                <div className="">
                     <svg className="absolute inset-0 left-40 w-full h-full "
                    width="500"
                    height="250"
                    viewBox="0 0 500 250"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <defs>
                        <linearGradient id="water" cx="10%" cy="100%" r="100%">
                        <stop offset="0%" stopColor="#613dd788" />
                        <stop offset="50%" stopColor="#613dd793" />
                        <stop offset="100%" stopColor="#EBE7FA" />
                        </linearGradient>
                    </defs>

                    <path transform="scale(4)"
                        d="M70 125
                        C90 60, 170 40, 250 55
                        C330 70, 360 120, 330 165
                        C300 210, 120 215, 80 170
                        C55 145, 50 135, 70 125Z"
                        fill="url(#water)"
                    />
                    </svg>
                </div>

                <div className="">
                     <svg className="absolute inset-0 left-[-400px] top-[20px] w-full h-full "
                    width="500"
                    height="350"
                    viewBox="0 0 500 350"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <defs>
                        <linearGradient id="water" cx="10%" cy="100%" r="100%">
                        <stop offset="0%" stopColor="#613dd74c" />
                        <stop offset="50%" stopColor="#613dd793" />
                        <stop offset="100%" stopColor="#EBE7FA" />
                        </linearGradient>
                    </defs>

                    <path transform="scale(4)"
                        d="M70 125
                        C90 60, 170 40, 250 55
                        C330 70, 360 120, 330 165
                        C300 210, 120 215, 80 170
                        C55 145, 50 135, 70 125Z"
                        fill="url(#water)"
                    />
                    </svg>
                </div>

                <div className="">
                     <svg className="absolute inset-0 top-[-70px] w-full h-full rotate-40 opacity-40 "
                    width="500"
                    height="350"
                    viewBox="0 0 500 350"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <defs>
                        <linearGradient id="water" cx="10%" cy="100%" r="100%">
                        <stop offset="0%" stopColor="#613dd788" />
                        <stop offset="50%" stopColor="#613dd793" />
                        <stop offset="100%" stopColor="#EBE7FA" />
                        </linearGradient>
                    </defs>

                    <path transform="scale(4)"
                        d="M70 125
                        C90 60, 170 40, 25 55
                        C330 7, 360 120, 30 165
                        C30 210, 120 215, 80 10
                        C55 14, 50 10, 70 15Z"
                        fill="url(#water)"
                    />
                    </svg>
                </div>

                <div className="">
                     <svg className="absolute inset-0 top-[0px] w-full h-full "
                    width="500"
                    height="350"
                    viewBox="0 0 500 350"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <defs>
                        <linearGradient id="water" cx="10%" cy="100%" r="100%">
                        <stop offset="0%" stopColor="#613dd788" />
                        <stop offset="50%" stopColor="#613dd793" />
                        <stop offset="100%" stopColor="#EBE7FA" />
                        </linearGradient>
                    </defs>

                    <path transform="scale(4)"
                        d="M70 125
                        C90 60, 170 40, 250 55
                        C330 70, 360 1200, 330 165
                        C300 210, 120 215, 80 170
                        C55 145, 50 135, 70 125Z"
                        fill="url(#water)"
                    />
                    </svg>
                </div>
            </div>
        </div>
    )
}