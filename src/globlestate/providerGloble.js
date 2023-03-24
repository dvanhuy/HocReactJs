import { useReducer } from "react";
import ContextGloble from "./ContextGloble";
import reducer,{initstate} from "./reducer"

function ProviderGloble({children}){
    const [state, dispatch] = useReducer(reducer, initstate);
    return(
        <ContextGloble.Provider value={[state, dispatch]}>
            {children}
        </ContextGloble.Provider>
    )
}

export default ProviderGloble