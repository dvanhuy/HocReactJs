import { useEffect, useState } from "react";

function UseEffectDomResizeFc(){
    const [width,setWidth] = useState(window.innerWidth);
    useEffect(()=>{
        const resize = ()=>{
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize",resize)
        console.log("addEventListener");
        return (()=>{
            window.removeEventListener("resize",resize);
            console.log("removeEventListener");
        })

    },[] )
    return (
        <h2 className="titleresize">{width}</h2>
    )
}
export default UseEffectDomResizeFc;