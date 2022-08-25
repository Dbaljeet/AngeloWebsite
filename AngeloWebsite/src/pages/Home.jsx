import React, { useState } from "react";
import {PrincipalTitle, ButtonShowMore} from '../components/Titles'
import Portfolio from "../components/Portfolio/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from '../components/Experience'
import MoreInfo from "../components/MoreInfo";
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
            <MoreInfo></MoreInfo>
            
        </>
    )
}
export default Home