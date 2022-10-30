
import { useState } from "react";

const data = [
    {
        "id":1,
        "name":"HTML"
    },
    {
        "id":2,
        "name":"CSS"
    },
    {
        "id":3,
        "name":"JS"
    }
]

function TwoWayBinding(){

    const [name,setname]= useState("")
    const [email,setemail]= useState("")
    const [radio,setradio]= useState()
    const [checked,setchecked]= useState([]);

    console.log(radio);

    const dangki= ()=>{
        console.log({
            name,
            email
        });
    }

    const handleCheckBox=(id)=>{
        setchecked(ev=>{
            if (checked.includes(id)) {
                return checked.filter(ev=> ev !== id)
            }
            else{
                return [...ev,id]
            }
        })
    }
    return (
        <div style={{padding:20}}>
            <div>
                <input value={name} type="text" onChange={ev => setname(ev.target.value)}/>
                <input value={email} type="text" onChange={ev => setemail(ev.target.value)}/>
                <button onClick={dangki}>
                    Đăng kí
                </button>
            </div>
            
            <div className="radio">
                {data.map((ev)=> (
                    <div key={ev.id}>
                        <input type="radio" 
                        checked={radio===ev.id}
                        onChange={()=> setradio(ev.id)}/>
                        {ev.name}
                    </div>
                    )
                )}
            </div>

            <div className="checked">
                {data.map((ev)=> (
                    <div key={ev.id}>
                        <input type="checkbox" 
                        checked={checked.includes(ev.id)}
                        onChange={()=>handleCheckBox(ev.id)}
                        />
                        {ev.name}
                    </div>
                ))}
            </div>
      </div>
    )

}
export default TwoWayBinding;