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
        <div className={` ${isMobile ? "pl-0 " : "pl-10"} ml-10  items-center justify-center mt-3`}>
        <ShowPath></ShowPath>
        <div>
            {children}
        </div>
        </div>
    )
}