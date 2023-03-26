import { useReducer } from "react";
import ContextGloble from "./ContextGloble";
import logger from "./logger";
import reducer,{initstate} from "./reducer"

function ProviderGloble({children}){
    const [state, dispatch] = useReducer(logger(reducer), initstate);
    return(
        <ContextGloble.Provider value={[state, dispatch]}>
            {children}
        </ContextGloble.Provider>
    )
}

export default ProviderGloble