import NavBar from "./nav";
import "./globals.css";
import {Figtree} from "next/font/google"
import ReduxProvider from "./store/Provider";
import CookieUI from "./CookieUI";

export const metadata = {
  title: "Property Cafe",
  description: "Buy, sell and rent properties in Nepal.",
};

const figtree = Figtree({
  subsets : ["latin"],
  weight : ["400","500","600","700"]
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      
     
    >
      
      <body className={figtree.className}>
        
         <ReduxProvider>
          <div>
           <CookieUI></CookieUI>
            <NavBar></NavBar>
            {children}
          </div>
         </ReduxProvider>
        
        </body>
    </html>
  );
}
