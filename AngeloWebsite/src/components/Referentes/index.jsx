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
                <h2>MIdu</h2>
                <IMG onError={()=>parentNode.removeChild()} src="https://avatars.githubusercontent.com/u/1561955?v=4" alt="midudev"/>
            </div>
            
            <h2>MIdu</h2>
            <h2>MIdu</h2>
            <h2>MIdu</h2>
            <h2>MIdu</h2>
        </ContainRef>
        </div>
        </>
    )
}
export default Referentes