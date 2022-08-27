import React from "react";
import { AboutInf, Container, Aboutme } from './styles'
const About = () =>{
    return(
        <>
        <Container>
            <AboutInf>
                Estudiante de ingeniería civil en computación e informática
            </AboutInf>
            <br></br>
            <Aboutme>
                La Serena, Chile
            </Aboutme>
            <Aboutme>
                22 años
            </Aboutme>
            <Aboutme bold={true}>
                En busca de práctica laboral
            </Aboutme>
        </Container>
            

        </>
    )
}
export default About