import { useContext } from "react";
import ContextGloble from "./ContextGloble"

export const useGloble =()=>{
    const [state,dispatch] = useContext(ContextGloble);
    return [state,dispatch]
}