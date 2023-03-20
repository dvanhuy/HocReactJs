import ComponentTemp from "./component";
import { ThemeProvider } from "./contextProvider";

function AppTemp(){
    return (
        <ThemeProvider>
            <ComponentTemp/>
        </ThemeProvider>
    )
}
export default AppTemp