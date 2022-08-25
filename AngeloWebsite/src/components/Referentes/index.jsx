import React from "react";
import { SecondaryTitle } from "../Titles";
import { ContainRef } from "../Containers";
import {IMG} from '../Referentes/styles'
import styled from "styled-components";

const Label = styled.label`
    font-size:2rem;
`

const Referentes = () =>{
    return(
        <>
        <div>
        <SecondaryTitle id="Men" colorRef="#003a60">Referentes</SecondaryTitle>
        <ContainRef>
            <div>
                <Label>Midudev</Label>
                <IMG onError={()=>parentNode.removeChild()} src="https://avatars.githubusercontent.com/u/1561955?v=4" alt="midudev"/>
            </div>
            
            <div>
                <Label>Nicolás Schürmann</Label>
                <IMG onError={()=>parentNode.removeChild()} src="https://pbs.twimg.com/profile_images/1497701062991437824/evabz349_400x400.jpg" alt="Holamundo"/>
            </div>
        </ContainRef>
        </div>
        </>
    )
}
export default Referentes