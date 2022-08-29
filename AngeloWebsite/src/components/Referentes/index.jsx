import React from "react";
import { SecondaryTitle } from "../Titles";
import { ContainRef } from "./styles";
import Referente from "../Referente";
const Referentes = () =>{

    const info = [
        {name:"midudev",image:"../../assets/midudev.jpg", twitter:'https://twitter.com/midudev' },
        {name:"HolaMundo",image:"../../assets/HolaMundo.jpg", twitter: 'https://twitter.com/_nasch_' },
        
    ]

    return(
        <>
        <SecondaryTitle id="Men">Referentes</SecondaryTitle>
        <ContainRef>
            {
            info.map (( { name , image, twitter} ) => 
                <Referente key={name} name={name} image={image} twitter={twitter} />
            )
            }
        </ContainRef>
        </>
    )
}
export default Referentes