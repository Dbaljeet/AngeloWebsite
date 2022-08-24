import React from "react";
import styled from 'styled-components'
import { SecondaryTitle } from '../Titles/index'

const P = styled.p`
    margin-bottom:60px;
    letter-spacing:1.5px;
`

const Section = styled.section`
    margin-top:20px;
`

const Experience = () =>{
    return(
        <> 
        <Section>
            <SecondaryTitle>Experiencias y conocimientos</SecondaryTitle>
            <P>
            Trabajo con base de datos (relacionales, no relacionales y multidimensionales).
            <br></br>
            Conocimentos de programación orientada a objetos.
            <br></br>
            Conocimientos de estructuras de datos.
            <br></br>
            Ingeniería de software, métodologia agile.
            <br></br>
            Data Science con Python (uso de libreria pandas).
            <br></br>
            Realización ETL (extract transform load).
            <br></br>
            Realización de dos videojuegos en unity para asignaturas de la universidad.
            <br></br>
            Frontend ( Javascript, Html, Css - React - Next ).
            <br></br>
            Backend ( Express ).
            <br></br>
            Javascript, Java, Python, C++, C# (por unity).
            <br></br>
            Scheme ( uso academico - programación funcional )
            <br></br>
            </P>
        </Section>
            </>
    )
}
export default Experience