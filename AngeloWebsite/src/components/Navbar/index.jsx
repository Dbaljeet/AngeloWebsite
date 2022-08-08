import React from "react";
import styled from "styled-components";
const Nav = styled.nav`
    height:100px;
    width:100%;
    min-width:200px;
    color:#fff;
    text-align:center;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-around;
`
const Navbar = () =>{
    return(
        <>
            <Nav>
                <h2>X</h2>    
                <h2>X2</h2>  
                <h2>X</h2>    
                <h2>X2</h2>  
                <h2>X</h2>    
                <h2>X2</h2>  
            </Nav>
        </>
    )
}
export default Navbar