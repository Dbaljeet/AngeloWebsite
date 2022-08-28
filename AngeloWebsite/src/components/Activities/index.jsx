import styled from 'styled-components'
import { SecondaryTitle } from '../Titles'

const Container = styled.section`
    padding-bottom:50px;
`
const LI = styled.li`
    list-style:none;
    letter-spacing:1.5px;
`

const Activities = () =>{
    return(
        <>
        <Container>
            <SecondaryTitle>
                Actividades dentro y fuera de la universidad
            </SecondaryTitle>
            <ul>
                <LI>
                    Tuve que elaborar una web 'PYTYM'. ( Frontend y Backend )
                </LI>
                <LI>
                    Una interfaz con ensamblador.  
                </LI>
                <LI>
                    Una simulación de combate estilo pokemon con python ( interfaz gráfica con tkinter ) y Postgresql
                     como DB para guardar las capturas, entrenadores y detalle de las batallas.
                </LI>
                <LI>
                    En la universidad realicé dos videojuegos con Unity ( una versión de polybridge y un juego de plataformas clásico )
                </LI>
                <LI>
                    Realización y ensamblaje de piezas en Autodesk Inventor, igualmente uso de Autocad
                </LI>
            </ul>
            
        </Container>
        </>
    )
}
export default Activities