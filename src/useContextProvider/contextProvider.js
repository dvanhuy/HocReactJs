import { createContext, useState } from "react"

const ThemContext = createContext()

function ThemeProvider({children}){
    const [theme, setTheme] = useState("light");
    const handleTheme = ()=>{
        setTheme(theme === "light"?"dark":"light")
    }
    const valueTemp = {
        theme,
        handleTheme
    }
    return (
        // đây là cách truyền con vào. truyền dưới dạng 1 object có 1 cột tên children
        <ThemContext.Provider value={valueTemp}>
            {children}
        </ThemContext.Provider>
    )
}
export {ThemContext,ThemeProvider}