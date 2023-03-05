import { useEffect, useState } from "react";

function UseEffectAvatar(){

    const [avatar,setAvatar] = useState()

    useEffect(()=>{
        return (()=>{
            avatar && URL.revokeObjectURL(avatar.linkimg)
        })
    },[avatar])

    const choseImage = (ev)=>{
        console.log("Adasd");
        const file = ev.target.files[0]
        file.linkimg = URL.createObjectURL(file)
        setAvatar(file)
    }
    return (
        <div>
            <input type="file" name="" id="" onChange={choseImage}/>
            {avatar && <img src={avatar.linkimg} alt=""/>}
        </div>
    )
}
export default UseEffectAvatar