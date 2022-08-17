import React, {useState} from "react";
import { useEffect } from "react";
import { Nav , Lista, Links, Hamburger} from "./stylesNavbar";
const Navbar = () =>{
    const [show, setShow] = useState(false)
    const [isMobile, setisMobile] = useState(window.innerWidth<622)
    const ShowMenu = () =>{
        !show ?
        setShow(true)
        :
        setShow(false)
    }
    
    const updateSize = (ev) =>{
        setisMobile(ev.target.innerWidth<622)
    }

    useEffect (()=>{
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize)
    },[])

    return(
        <>
            
            <Nav className='burguer' open={show}>
                <Hamburger id={`${show ? 'open' : ''}`} onClick={ShowMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>

                { isMobile &&
                <Lista className={`${show? 'active':'desactive'}`}>
                    <Links onClick={ShowMenu} to="Home" spy={true} smooth={true} offset={-300} duration={500} isDynamic={true}>Inicio</Links> 
                    <Links onClick={ShowMenu} to="Portfolio" spy={true} smooth={true} offset={-350} duration={500} isDynamic={true}>Portfolio</Links>    
                    <Links onClick={ShowMenu} to="Contact" spy={true} smooth={true} offset={-350} duration={500} isDynamic={true}>Contacto</Links>  
                    <Links onClick={ShowMenu} to="Ref" spy={true} smooth={true} offset={-350} duration={500} isDynamic={true}>Referentes</Links>
                </Lista>
                }

                { !isMobile &&
                <Lista className={`${show? 'active':'desactive'}`}>
                    <Links onClick={ShowMenu} to="Home" spy={true} smooth={true} offset={-100} duration={500} isDynamic={true}>Inicio</Links> 
                    <Links onClick={ShowMenu} to="Portfolio" spy={true} smooth={true} offset={-50} duration={500} isDynamic={true}>Portfolio</Links>    
                    <Links onClick={ShowMenu} to="Contact" spy={true} smooth={true} offset={-60} duration={500} isDynamic={true}>Contacto</Links>  
                    <Links onClick={ShowMenu} to="Ref" spy={true} smooth={true} offset={-60} duration={500} isDynamic={true}>Referentes</Links>
                </Lista>
                }
            </Nav>
        </>
    )
}
export default Navbar