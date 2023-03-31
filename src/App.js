import { useState } from "react";
import "./App.css"
// import IndexGloblestate from "./globlestate/IndexGloblestate"
import UseImperativee from "./useImperative/useImperative";

//tự tạo ra 1 hàm giống như là có người khác kích hoạt
// function emitComment(id,noidung){
//   setInterval(()=>{
//     window.dispatchEvent(
//       new CustomEvent("noidung"+id,{
//         //có thể truyền json
//         detail: noidung
//       })
//     )
//   },2000)
// }
// emitComment(1,"Đây là nội dung của emit 1")
// emitComment(2,"Đây là nội dung của emit 2")
// emitComment(3,"Đây là nội dung của emit 3")
function ToogleMount(){
  const [show,setshow] = useState(false)
  return(
      <div className="main">
          <button 
              onClick={()=>{
                  setshow(!show);
              }}  
          > Toogle</button>
          {show && <UseImperativee/>}  
      </div>
  )
}


function App() {
  
  return(
    // use state
    // <>
    //     <HocUseState/>
    //     <SetGift/>
    //     <TwoWayBinding/>
    // </>
    // use effect
    <>
      <ToogleMount/>
    </>
  )
}

export default App;
