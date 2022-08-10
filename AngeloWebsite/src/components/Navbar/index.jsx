import React, {useState} from "react";
import ScrollYContext from '../../Context/ScrollYContext' 
import { Nav , Lista, Links} from "./stylesNavbar";
const Navbar = () =>{
    const [show, setShow] = useState(false)
    const ShowMenu = () =>{
        !show ?
        setShow(true)
        :
        setShow(false)
    }

    return(
        <>
            <div onClick={ShowMenu}>Click</div>
            <Nav>
                <Lista className={`${show? 'active':'desactive'}`}>
                    <Links href="#Start">Start</Links>
                    <Links href="#About">About</Links>  
                    <Links href="#Portfolio">Portfolio</Links>    
                    <Links href="#Contact">Contact me</Links>  
                    <Links href="#Men">Men</Links>  
                </Lista>
            </Nav>
        </>
    )
}
export default Navbar