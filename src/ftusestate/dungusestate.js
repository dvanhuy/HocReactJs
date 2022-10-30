import {useState} from 'react'

function HocUseState() {
    const [count, setCount] = useState(()=>{
      const x= 1;
      const y =1;
      return x+y;
    });
  
    function handlecount(){
      //hoat dong 1 lan
      setCount(count+1);
      setCount(count+1);
  
      //hoat dong nhieu lan
      setCount((ev)=>{
        return(ev+1)  
      });
  
      setCount((ev)=>ev+1);
    }
  
    return (
      <div style={{padding:20}}>
        <h1>{count}</h1>
        <button onClick={handlecount}>
          count
        </button>
      </div>
    );
}

export default HocUseState;