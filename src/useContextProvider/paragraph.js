import { useContext } from "react";
import { ThemContext } from "./contextProvider";

function Paragraph(){
    const getTheme = useContext(ThemContext);
    return (
        <>
            <div className={getTheme.theme}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Excepturi a officia explicabo, sit voluptates fugit quibusdam,
             suscipit eligendi laborum voluptatem omnis.</div>
        </>
    )
}
export default Paragraph