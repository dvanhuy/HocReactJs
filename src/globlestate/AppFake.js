import { useContext } from "react";
import ContextGloble from "./ContextGloble"

function AppFake(){
    const [state,dispatch] = useContext(ContextGloble);
    console.log(state);
    return (
        <div>sasd</div>
    )
}
export default AppFake