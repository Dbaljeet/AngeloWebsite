import React from "react";
import { SecondaryTitle } from "../Titles";
import { ContainRef } from "../Containers";
import {IMG} from '../Referentes/styles'
const Referentes = () =>{
    return(
        <>
        <div id="Ref">
        <SecondaryTitle id="Men" colorRef="#003a60">Referentes</SecondaryTitle>
        <ContainRef>
            <div>
                <h2>Midudev</h2>
                <IMG onError={()=>parentNode.removeChild()} src="https://avatars.githubusercontent.com/u/1561955?v=4" alt="midudev"/>
            </div>
            
            <div>
                <h2>Nicolás Schürmann</h2>
                <IMG onError={()=>parentNode.removeChild()} src="https://pbs.twimg.com/profile_images/1497701062991437824/evabz349_400x400.jpg" alt="Holamundo"/>
            </div>
            <h2>MIdu</h2>
            <h2>MIdu</h2>
            <h2>MIdu</h2>
        </ContainRef>
        </div>
        </>
    )
}
export default Referentes