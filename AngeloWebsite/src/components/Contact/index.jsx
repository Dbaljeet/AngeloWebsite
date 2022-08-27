import React from "react";
import {ContentScroll , ContentContainer, IMG} from './styles'
import {SecondaryTitle} from '../Titles'
import Linkedin from '../../assets/Linkedin.svg'
import Github from '../../assets/Github'
import Mail from '../../assets/Mail.svg'
const Contact = () =>{
    return(
        <>
            <ContentScroll id="Contact">
                <SecondaryTitle>Contacto</SecondaryTitle>
                <ContentContainer target='_blank' href="https://www.linkedin.com/in/angelo-berrios-pinto-96b317235/">
                    <IMG width={'130px'} title="Linkedin" alt="Linkedin Angelo Berrios" src={Linkedin}></IMG>
                </ContentContainer>
                
                <ContentContainer color="#999898" target="_blank" href="https://github.com/Dbaljeet">
                    <Github width={'100px'}/>
                </ContentContainer>
                
                <ContentContainer target="_blank" href="mailto:angelo.berrios99@gmail.com">
                    <IMG width={'100px'} title="Correo contacto" alt="Mail Angelo Berrios" src={Mail}></IMG>
                </ContentContainer>

            </ContentScroll>
        </>
    )
}
export default Contact