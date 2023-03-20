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
        <ThemContext.Provider value={valueTemp}>
            {children}
        </ThemContext.Provider>
    )
}
export {ThemContext,ThemeProvider}