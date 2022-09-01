import React from "react";
import { PrincipalTitle } from '../components/Titles'
import Portfolio from "../components/Portfolio/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from '../components/Experience'
import MoreInfo from "../components/MoreInfo";
const Home = () =>{
    return (
        <>
            
            <PrincipalTitle>Angelo Berrios Pinto</PrincipalTitle>
            <About></About>
            <Portfolio></Portfolio>
            <Experience></Experience>
            <Contact></Contact>
            <MoreInfo></MoreInfo>
            
        </>
    )
}
export default Home