import { useState, createContext } from "react";
import Content from "./content"

// bình thường lúc truyền bằng prop => a -> b -> c
// dùng context => a->c
//1. create context
// 2.provider
//3.consumer

export const ThemContext = createContext()

function UseContextt(){
    const [theme, setTheme] = useState("light");
    return (
        <ThemContext.Provider value={theme}>
            <br />
            <button onClick={()=>setTheme(theme==="light"?"dark":"light")}>Toogle theme</button>
            <Content theme={theme}>Children</Content>
        </ThemContext.Provider>
    )
}
export default UseContextt