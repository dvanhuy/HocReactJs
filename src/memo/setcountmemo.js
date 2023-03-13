import { useState } from "react"
import Kocanrerender from "./domkocanrerender"

function SetCountMemo(){

    const [count,setCount] = useState(0)

    const increase = ()=>{
        setCount(count+1)
    }

    const [count2,setCount2] = useState(0)

    const increase2 = ()=>{
        setCount2(count2+1)
    }

    return (
        <>
            <Kocanrerender count={count}/>
            <h1>{count}</h1>
            <h1>{count2}</h1>
            <button onClick={increase} style={{marginTop: "20px"}} >Tăng</button>
            <button onClick={increase2} style={{marginTop: "20px"}} >Tăng 2</button>
        </>
    )
}
export default SetCountMemo