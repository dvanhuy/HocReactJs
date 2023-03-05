import { useEffect } from "react";
import { useState } from "react"

function UseEffectTimeFunction(){
    const [countTime,setcountTime] = useState("180")

    useEffect(()=>{
        const countfc = setInterval(() => {
            setcountTime(ev=>ev-1)
            console.log("count time ...");
        }, 1000);

        return ()=>clearInterval(countfc)
    },[])

    return(
        <>
            <h1>{countTime}</h1>
        </>
    )
}
export default UseEffectTimeFunction