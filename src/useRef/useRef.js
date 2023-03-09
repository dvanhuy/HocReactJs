import { useState } from "react"

function TestUseRef(){

    const [count,setCount] = useState(60)

    // useEffect (()=>{
    //     const setTime = setInterval(()=>{
    //         if (count>0)
    //             setCount(count-1)
    //     })
    //     return ()=>clearInterval(setTime)
    // })

    const handleStart= ()=>{
        console.log("Start");
        setInterval(()=>{
            setCount(ev=>ev-1)
        },500)
    }
    const handleStop= ()=>{
        console.log("Stop");
    }


    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}
export default TestUseRef