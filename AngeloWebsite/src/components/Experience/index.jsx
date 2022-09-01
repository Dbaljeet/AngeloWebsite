import React from 'react';
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
    @media screen and (max-width:1000px){
        padding: 0 2rem;
    }
`

const Experience = () =>{
    return(
        <> 
        <Section id="Experience">
            <SecondaryTitle>Conocimientos</SecondaryTitle>

            <List>
                <Element>
                    Trabajo con <b>base de datos</b> (relacionales, no relacionales y multidimensionales).
                </Element>
                <Element>
                    Conocimentos de <b>programación orientada a objetos</b>.
                </Element>
                <Element>
                    Conocimientos de <b>estructuras de datos</b>.
                </Element>
                <Element>
                <b>Ingeniería de software</b>, métodologia agile y buenas prácticas.
                </Element>
                <Element>
                <b>Data Science</b> con Python (uso de libreria pandas con millones de datos).
                </Element>
                <Element>
                    Realización <b>ETL</b> (extract transform load).
                </Element>
                <Element>
                    Realización de <b>videojuegos en unity</b>.
                </Element>
                <Element>
                <b>Frontend</b> con Javascript, Html, Css - React - Nextjs.
                </Element>
                <Element>
                <b>Backend</b> ( Nodejs - Express ).
                </Element>
                <Element>
                    Realización de <b>interfaces</b> para aplicaciones de escritorio con python ( Tkinter )
                </Element>
                <Element>
                <b>Uso de lenguajes</b>: Javascript, Java, Python, C++, C# ( por unity ).
                </Element>
                <Element>
                    Lenguaje Scheme ( aunque solo ha tenido uso académico - <b>programación funcional</b> )
                </Element>
                <Element>
                <b>Aplicaciones móviles</b> con React native ( proyecto en proceso )
                </Element>
            </List>
        </Section>
            </>
    )
}
export default Experience