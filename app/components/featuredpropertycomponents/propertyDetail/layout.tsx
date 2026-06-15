"use client"
import ShowPath from "@/app/showPath/ShowPath";
import { useMediaQuery } from "react-responsive";

export default function RootLayout({
    children,
}:{
    children: React.ReactNode;
}){
    const isMobile = useMediaQuery({maxWidth: 767})
    return(
        <div className={`    flex flex-col  items-center  mt-3 ${isMobile? "mr-2":""}`}>
        <div className="w-[87vw]  ">
            <ShowPath></ShowPath>
        </div>
        <div>
            {children}
        </div>
        </div>
    )
}