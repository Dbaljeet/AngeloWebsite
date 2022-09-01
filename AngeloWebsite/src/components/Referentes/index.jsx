import React from "react";
import { SecondaryTitle } from "../Titles";
import { ContainRef, Why } from "./styles";
import Referente from "../Referente";
import Midudev from '../../assets/Midudev.jpg'
import HolaMundo from '../../assets/HolaMundo.jpg'
const Referentes = () =>{

    const info = [
        {name:"midudev",image:Midudev, twitter:'https://twitter.com/midudev' },
        {name:"HolaMundo",image:HolaMundo, twitter: 'https://twitter.com/_nasch_' },
        
    ]

    return(
        <>
        <SecondaryTitle id="Men">Referentes</SecondaryTitle>
        <Why>Estas son personas que para mí son un ejemplo a seguir en el área</Why>
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