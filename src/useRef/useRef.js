import { useEffect, useRef, useState } from "react"

function TestUseRef(){

    const [count,setCount] = useState(60)
    //chỉ tạo 1 lần
    const timeID = useRef();
    const prevCount = useRef();
    const domelement = useRef();
    
    useEffect(()=>{
        return (()=>{
            console.log("Clear");
            clearInterval(timeID.current)
        })
    },[])
    //lưu số cũ
    useEffect(()=>{
        prevCount.current = count
    },[count])
    //lun lun in
    useEffect(()=>{
        console.log("dom",domelement.current);
    })

    // useEffect (()=>{
    //     const setTime = setInterval(()=>{
    //         if (count>0)
    //             setCount(count-1)
    //     })
    //     return ()=>clearInterval(setTime)
    // })
    // nếu render lại sẽ bị lỗi 
    // let timeID
    const handleStart= ()=>{
        timeID.current = setInterval(()=>{
            setCount(ev=>ev-1)
            console.log("Count");
        },1000)
        console.log("Start ",timeID.current);
    }
    const handleStop= ()=>{
        console.log("Stop ",timeID.current);
        clearInterval(timeID.current)
    }

    console.log("Count ",count," prevcount ",prevCount.current);
    return (
        <>
            <h1 ref={domelement}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}
export default TestUseRef