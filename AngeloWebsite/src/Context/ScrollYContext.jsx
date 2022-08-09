import { createContext, useState } from "react";
const ScrollYContext = createContext()



const ScrollYProvider = ({children}) =>{
    const [ posy, setPosy] = useState(window.scrollY)

    const Setpos = () =>{
        window.addEventListener('scroll', Screen)
        return () =>{
            window.removeEventListener('scroll', Screen)
        }
    }

    const data = {posy, Setpos}

    return(
        <ScrollYContext.Provider value={data}>{children}</ScrollYContext.Provider>
    )
}
export {ScrollYProvider}
export default ScrollYContext