import React from "react";
import {PrincipalTitle} from '../components/Titles'
import Portfolio from "../components/Portfolio/Portfolio";
import About from "../components/About";
import Referentes from "../components/Referentes";
import Contact from "../components/Contact";
import Experience from '../components/Experience'
const Home = () =>{
    return (
        <>
            <div id="Home">
                <PrincipalTitle colorRef="#fff">Angelo Berrios Pinto</PrincipalTitle>
                <About></About>
            </div>
            <Portfolio></Portfolio>
            <Experience></Experience>
            <Contact></Contact>
            
            <h2>Extras</h2>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <Referentes ></Referentes>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br>
        </>
    )
}
export default Home