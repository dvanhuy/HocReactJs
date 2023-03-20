import { useContext } from "react";
import Content from "./content"
import { ThemContext } from "./contextProvider";

function ComponentTemp(){
    const getTheme = useContext(ThemContext);
    return (
        <>
            <br />
            <button onClick={getTheme.handleTheme} >Toogle theme</button>
            <Content/>
        </>
    )
}
export default ComponentTemp