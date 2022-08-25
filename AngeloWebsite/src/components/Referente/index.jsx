import styled from "styled-components";
import {IMG} from '../Referentes/styles'
const Label = styled.label`
    font-size:2rem;
`
const Figure = styled.figure`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Referente = ({name, image}) =>{
    return(
        <>
            <Figure>
                <IMG loading="lazy" onError={()=>parentNode.removeChild()} src={image} alt={`imagen de ${name}`}/>
                <Label>{name}</Label>
            </Figure>
        </>
    )
}

export default Referente