import React, { useState } from "react";
import {PrincipalTitle, ButtonShowMore} from '../components/Titles'
import Portfolio from "../components/Portfolio/Portfolio";
import About from "../components/About";
import Referentes from "../components/Referentes";
import Contact from "../components/Contact";
import Experience from '../components/Experience'
const Home = () =>{
    const [ clicked, setClicked ] = useState ( false )
    return (
        <>
            <div id="Home">
                <PrincipalTitle colorRef="#fff">Angelo Berrios Pinto</PrincipalTitle>
                <About></About>
            </div>
            <Portfolio></Portfolio>
            <Experience></Experience>
            <Contact></Contact>
            
            <ButtonShowMore id='Ref' onClick={()=>setClicked(true)}>Más sobre mí</ButtonShowMore>
            { clicked &&
                <Referentes ></Referentes>
            }
        </>
    )
}
export default Home