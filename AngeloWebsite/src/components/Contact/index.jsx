import React from "react";
import {ContentScroll , ContentContainer, IMG} from './styles'
import {SecondaryTitle} from '../Titles'
import Linkedin from '../../assets/Linkedin.svg'
import Github from '../../assets/Github.svg'
import Mail from '../../assets/Mail.svg'
const Contact = () =>{
    return(
        <>
            <ContentScroll id="Contact">
                <SecondaryTitle>Contacto</SecondaryTitle>
                <ContentContainer target='_blank' href="https://www.linkedin.com/in/angelo-berrios-pinto-96b317235/">
                    <IMG title="Linkedin" alt="Linkedin Angelo Berrios" src={Linkedin}></IMG>
                </ContentContainer>
                
                <ContentContainer target="_blank" href="https://github.com/Dbaljeet">
                    <IMG title="github" alt="github Angelo Berrios" src={Github}></IMG>
                </ContentContainer>
                
                <ContentContainer target="_blank" href="mailto:angelo.berrios99@gmail.com">
                    <IMG title="Correo contacto" alt="Mail Angelo Berrios" src={Mail}></IMG>
                </ContentContainer>

            </ContentScroll>
        </>
    )
}
export default Contact