import NavBar from "./components/nav";
import "./globals.css";
import {Figtree} from "next/font/google"
import ReduxProvider from "./store/Provider";

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
          <NavBar></NavBar>
          {children}
         </ReduxProvider>
        
        </body>
    </html>
  );
}
