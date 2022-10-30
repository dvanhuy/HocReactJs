import { useState,useEffect } from "react";


function CompomentRerender(){
    const tabs = ["posts","todos","albums","users"]
    const [data,setdata] = useState([]);
    const [title,settitle] = useState("");
    const [menu,setmenu] = useState("posts");

    const [totop,settotop] = useState(false);
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then(response => response.json())
    //         .then(json => setdata(json))
    //         //se re render  
    // },[]) // chi load huy nhat 1 lan
    useEffect(()=>{
        document.title = title
    },[title])

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            settotop(window.scrollY > 200) 
        })
    },[])


    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/"+menu)
            .then(response => response.json())
            .then(json => setdata(json))
    },[menu])

    console.log("re-render");
    return(
        <>
            <div>
                {tabs.map(ev=>(
                    <button 
                    key={ev} 
                    style={menu===ev ? {
                        color : "red",
                    }:{}}
                    onClick={()=>setmenu(ev)}
                    >{ev}</button>
                    ))}
            </div>
            <input type="text" style={{paddingLeft : 10}} value={title} onChange={ev => settitle(ev.target.value)}/>
            <div>
                <ul>
                    {
                        data.map((ev)=>{
                            return (
                                <li key={ev.id}>{ev.title || ev.email}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
       
    )
}



function FduseEffect(){
    const [show,setshow] = useState(false);
    return(
        <div className="main">
            <button 
                onClick={()=>{
                    setshow(!show);
                }}  
            > Toogle</button>
            {show && <CompomentRerender/>}  
        </div>
    )
}

export default FduseEffect;