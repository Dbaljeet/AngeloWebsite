import React from "react";
import styled from 'styled-components'
import { SecondaryTitle } from '../Titles/index'

const Element = styled.li`
    letter-spacing:1.5px;
    list-style:none;
`

const Section = styled.section`
    margin-top:20px;
`

const List = styled.ul`
    margin-top:20px;
`

const Experience = () =>{
    return(
        <> 
        <Section>
            <SecondaryTitle>Experiencias y conocimientos</SecondaryTitle>

            <List>
                <Element>
                    Trabajo con base de datos (relacionales, no relacionales y multidimensionales).
                </Element>
                <Element>
                    Conocimentos de programación orientada a objetos.
                </Element>
                <Element>
                    Conocimientos de estructuras de datos.
                </Element>
                <Element>
                    Ingeniería de software, métodologia agile.
                </Element>
                <Element>
                    Data Science con Python (uso de Elementbreria pandas).
                </Element>
                <Element>
                    ReaElementzación ETL (extract transform load).
                </Element>
                <Element>
                    ReaElementzación de dos videojuegos en unity para asignaturas de la universidad.
                </Element>
                <Element>
                    Frontend ( Javascript, Html, Css - React - Next ).
                </Element>
                <Element>
                    Backend ( Express ).
                </Element>
                <Element>
                    Javascript, Java, Python, C++, C# (por unity).
                </Element>
                <Element>
                    Scheme ( uso academico - programación funcional )
                </Element>
            </List>
        </Section>
            </>
    )
}
export default Experience