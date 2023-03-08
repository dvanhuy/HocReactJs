// import HocUseState from './ftusestate/dungusestate'
// import SetGift from "./ftusestate/setgiftuserstate"
// import TwoWayBinding from "./ftusestate/twowaybinding"
// import FduseEffect from "./fduseeffect/useEffect"
import { useState } from "react";
// import UseEffectAvatar from "./fduseeffect/useEffectAvatar";
// import UseEffectFakeCommect from "./fduseeffect/useEffectFakeComment";
import UseLayOutEffect from "./useLayoutEffect/uselayoutEffect";
// import UseEffectCleanUpCB from "./fduseeffect/useEffectCleanUpCB";
// import UseEffectDomResizeFc from "./fduseeffect/useEffectDomResize";
// import UseEffectTimeFunction from "./fduseeffect/useEffecttimefc";

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
          {show && <UseLayOutEffect/>}  
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
