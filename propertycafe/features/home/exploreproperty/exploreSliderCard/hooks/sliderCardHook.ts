 "use client"
 
 import { useState,useEffect,useRef } from "react";

 
 export function useSlideCard(length : number) {
        
    const [scroll, setScroll] = useState(0)
    
        const sliderRef = useRef<HTMLDivElement | null>(null);
    
        const [width, setWidth] = useState<number>(0)
    
        const [hoverder, setHover] = useState<boolean>(false)

        const left = () => setScroll(prev => prev - 1)
        const right = () => setScroll(prev => prev + 1)
        
        const onMouseEnter= () => setHover(true)
        const onMouseLeave= () => setHover(false)
       
    
        useEffect(() => {
            const updateWidth = () => {
                if (sliderRef.current?.children[0]?.children[0]) {
                    const firstChild = sliderRef.current.children[0]?.children[0] as HTMLElement;
                    setWidth(firstChild.offsetWidth + 20)
                }
            }
            
            updateWidth();
            
    
            window.addEventListener("resize", updateWidth)
            return () => {
                window.removeEventListener("resize", updateWidth);
            };
        }, [length])

        return {scroll,sliderRef,width,hoverder,right,left,onMouseEnter,onMouseLeave}
 } 