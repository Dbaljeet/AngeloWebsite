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
            
            <Nav className='burguer' open={show}>
                <Hamburger id={`${show ? 'open' : ''}`} onClick={ShowMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>
                <Lista className={`${show? 'active':'desactive'}`}>
                    <Links onClick={ShowMenu} to="Home" spy={true} smooth={true} offset={-100} duration={500}>Inicio</Links> 
                    <Links onClick={ShowMenu} to="Portfolio" spy={true} smooth={true} offset={-50} duration={500}>Portfolio</Links>    
                    <Links onClick={ShowMenu} to="Contact" spy={true} smooth={true} offset={-60} duration={500}>Contacto</Links>  
                    <Links onClick={ShowMenu} to="Ref" spy={true} smooth={true} offset={-60} duration={500}>Referentes</Links>
                </Lista>
            </Nav>
        </>
    )
}
export default Navbar