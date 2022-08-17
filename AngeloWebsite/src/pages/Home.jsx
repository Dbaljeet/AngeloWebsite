import React, { useState } from "react";
import {PrincipalTitle} from '../components/Titles'
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
            
            <h2 onClick={()=>setClicked(true)}>Extras</h2>
            { clicked &&
                <Referentes ></Referentes>
            }
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br>
        </>
    )
}
export default Home