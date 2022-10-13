import React from 'react'
import { AboutInf, Container, Aboutme } from './styles'
const About = () => {
  return (
    <>
      <Container>
        <AboutInf>
          Estudiante de ingeniería civil en computación e informática
        </AboutInf>
        <br></br>
        <Aboutme>La Serena, Chile</Aboutme>
        <Aboutme>23 años</Aboutme>
        <Aboutme>
          <b>En busca de práctica profesional</b>
        </Aboutme>
      </Container>
    </>
  )
}
export default About
