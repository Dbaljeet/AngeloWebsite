import React from "react";
import { SecondaryTitle } from "../Titles";
import { ContainRef } from "../Containers";
import Referente from "../Referente";

const Referentes = () =>{

    const info = [
        {name:"midudev",image:"https://avatars.githubusercontent.com/u/1561955?v=4"},
        {name:"HolaMundo",image:"https://pbs.twimg.com/profile_images/1497701062991437824/evabz349_400x400.jpg"},
        
    ]

    return(
        <>
        <SecondaryTitle id="Men">Referentes</SecondaryTitle>
        <ContainRef>
            {
            info.map (( { name , image} ) => 
                <Referente key={name} name={name} image={image}/>
            )
            }
        </ContainRef>
        </>
    )
}
export default Referentes