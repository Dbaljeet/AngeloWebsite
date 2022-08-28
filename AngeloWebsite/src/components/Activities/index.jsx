import styled from 'styled-components'
import { SecondaryTitle } from '../Titles'

const Container = styled.section`
    padding-bottom:50px;
`
const LI = styled.li`
    list-style:none;
    letter-spacing:1.5px;
`
const UL = styled.ul`
    margin-top:25px;
`

const Activities = () =>{
    return(
        <>
        <Container>
            <SecondaryTitle>
                Actividades dentro y fuera de la universidad
            </SecondaryTitle>
            <UL>
                <LI>
                    Elaboré una <b>web</b> llamada 'PYTYM'. ( Frontend y Backend )
                </LI>
                <LI>
                    Una interfaz con <b>ensamblador</b> que animaba 'snake'.  
                </LI>
                <LI>
                    Una simulación de combate estilo pokemon con <b>python</b> ( <b>interfaz gráfica con tkinter</b> ) y <b>Postgresql </b>
                     como base de datos para guardar las capturas, entrenadores y detalle de las batallas.
                </LI>
                <LI>
                    En la universidad realicé dos <b>videojuegos con Unity</b> ( una versión de polybridge y un juego de plataformas clásico )
                </LI>
                <LI>
                    <b>Análisis y presentación de datos</b> ( con Python, Postgresql y Power BI ).
                </LI>
                <LI>
                    <b>Realización y ensamblaje de piezas</b> en Autodesk Inventor, igualmente uso de Autocad
                </LI>
            </UL>
            
        </Container>
        </>
    )
}
export default Activities