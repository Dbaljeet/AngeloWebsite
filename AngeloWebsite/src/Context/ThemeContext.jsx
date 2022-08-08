import { createContext, useState } from "react";
const ThemeContext = createContext()

const initialTheme = 'dark'


const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState(initialTheme)

    const handleTheme = (ev) => {
        (ev.target.value === 'light') ? setTheme('light') : setTheme('dark')
    }

    const data = {theme, handleTheme}

    return(
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )
}
export {ThemeProvider}
export default ThemeContext