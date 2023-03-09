import { useLayoutEffect } from "react"
import { useEffect } from "react"
import { useState } from "react"

function UseLayOutEffect(){

    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)
    
    useEffect(()=>{
        if (count > 3)
            setCount(0)
    },[count])

    // re render compoment cuoi cung
    useLayoutEffect(()=>{
        if (count2 > 3)
            setCount2(0)
    },[count2])

    return (
        <>
            <div>
                <h1>USE EFFECT</h1>
                <h2>{count}</h2>
                <button onClick={()=>setCount(x=>x+1)}>ADD</button>
            </div>

            <div>
                <h1>USE LAYOUT EFFECT</h1>
                <h2>{count2}</h2>
                <button onClick={()=>setCount2(x=>x+1)}>ADD</button>
            </div>
        </>
    )
}
export default UseLayOutEffect