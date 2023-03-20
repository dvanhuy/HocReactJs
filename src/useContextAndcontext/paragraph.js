import { useContext } from "react";
import {ThemContext} from "./usecontext"

function Paragraph(){
    const theme = useContext(ThemContext);
    return (
        <>
            <div className={theme}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Excepturi a officia explicabo, sit voluptates fugit quibusdam,
             suscipit eligendi laborum voluptatem omnis. Ut voluptates consequatur 
             eveniet quaerat impedit fuga eligendi expedita.</div>
             <div>Theme là {theme}</div>
        </>
    )
}
export default Paragraph