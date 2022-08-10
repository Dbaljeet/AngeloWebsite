import React, {useState} from "react";
import ScrollYContext from '../../Context/ScrollYContext' 
import { Nav , Lista, Links, Hamburger} from "./stylesNavbar";
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
            
            <Nav open={show}>
                <Hamburger onClick={ShowMenu}>
                    {show ?
                    'Click close Menu': 'Click open Menu'
                    }
                </Hamburger>
                <Lista className={`${show? 'active':'desactive'}`}>
                    <Links onClick={ShowMenu} href="#Start">Start</Links>
                    <Links onClick={ShowMenu} href="#About">About</Links>  
                    <Links onClick={ShowMenu} href="#Portfolio">Portfolio</Links>    
                    <Links onClick={ShowMenu} href="#Contact">Contact me</Links>  
                    <Links onClick={ShowMenu} href="#Men">Men</Links>  
                </Lista>
            </Nav>
        </>
    )
}
export default Navbar