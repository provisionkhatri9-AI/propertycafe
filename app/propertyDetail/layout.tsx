import ShowPath from "./ShowPath";
export default function RootLayout({
    children,
}:{
    children: React.ReactNode;
}){
    
    return(
        <div className={`flex flex-col  items-center  mt-3 `}>
        <div className="w-[87vw]  ">
            <ShowPath></ShowPath>
        </div>
        <div>
            {children}
        </div>
        </div>
    )
}