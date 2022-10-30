import { useState } from "react";

const listgifts=["CPU i9","RAM 16g","pad chuột"]

function SetGift(){

    const [gift,setgift]= useState()

    const handlerandom = ()=>{
        const random = Math.floor(Math.random() * listgifts.length)
        setgift(listgifts[random])
    }

    return (
        <div style={{padding:20}}>
          <h1>{gift || "Chưa có phần thưởng"}</h1>
          <button onClick={handlerandom}>
            Gift
          </button>
      </div>
    )
}
export default SetGift;