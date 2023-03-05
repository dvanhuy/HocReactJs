// import HocUseState from './ftusestate/dungusestate'
// import SetGift from "./ftusestate/setgiftuserstate"
// import TwoWayBinding from "./ftusestate/twowaybinding"
// import FduseEffect from "./fduseeffect/useEffect"
import { useState } from "react";
import UseEffectAvatar from "./fduseeffect/useEffectAvatar";
// import UseEffectCleanUpCB from "./fduseeffect/useEffectCleanUpCB";
// import UseEffectDomResizeFc from "./fduseeffect/useEffectDomResize";
// import UseEffectTimeFunction from "./fduseeffect/useEffecttimefc";
function ToogleMount(){
  const [show,setshow] = useState(false)
  return(
      <div className="main">
          <button 
              onClick={()=>{
                  setshow(!show);
              }}  
          > Toogle</button>
          {show && <UseEffectAvatar/>}  
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
