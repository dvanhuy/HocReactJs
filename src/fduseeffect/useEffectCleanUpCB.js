import { useEffect, useState } from "react"

function UseEffectCleanUpCB(){

    const [count,setCount] = useState(1)

    useEffect(()=>{
        console.log("mount or re-render lần "+count);

        return()=>{
            console.log("clean up lần "+count);
        }
    },[count])
    return(
        <>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>
                Tăng lên
            </button>
        </>
    )
}
export default UseEffectCleanUpCB