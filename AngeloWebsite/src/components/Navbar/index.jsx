import React, {useState} from "react";
import styled from "styled-components";
const Nav = styled.nav`
    position:sticky;
    top:0;
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
    &&.active{
        background-color:#3c3c3c;
    }
`
import ScrollYContext from '../../Context/ScrollYContext' 

const Navbar = () =>{



    return(
        <>
            <Nav>
                <h2>Start</h2>    
                <h2>About</h2>  
                <h2>Portfolio</h2>    
                <h2>Contact me</h2>  
                <h2>Men</h2>  
            </Nav>
        </>
    )
}
export default Navbar