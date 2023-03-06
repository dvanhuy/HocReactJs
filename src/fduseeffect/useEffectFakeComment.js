import { useEffect, useState } from "react"

const titles = [
    {
        id:1,
        name:"Học react js"
    },
    {
        id:2,
        name:"Học Java"
    },
    {
        id:3,
        name:"Học Dot net"
    }
]

function UseEffectFakeCommect(){

    const [lessonid,setLessonid] = useState(1)

    useEffect(()=>{
        const sukienComment = (ev)=>{
            console.log(ev);
        }
        window.addEventListener("noidung1",sukienComment)
    },[])

    return (
        <>
            <ul>
                {titles.map(lesson =>(
                    <li
                        key={lesson.id}
                        style={
                            {
                                color: lessonid === lesson.id ? "red" : "black",
                                cursor: "pointer",
                                fontSize:"18px"
                            }
                        }
                        onClick={()=>setLessonid(lesson.id)}
                    >{lesson.name}</li>
                ))}
            </ul>
        </>
    )
}
export default UseEffectFakeCommect