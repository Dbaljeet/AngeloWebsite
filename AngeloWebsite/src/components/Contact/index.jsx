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
                        <IMG src={Linkedin}></IMG>
                </ContentContainer>
                
                <ContentContainer target="_blank" href="https://github.com/Dbaljeet">
                    <IMG src={Github}></IMG>
                </ContentContainer>
                
                <ContentContainer>
                    <IMG src={Mail}></IMG>
                </ContentContainer>

            </ContentScroll>
        </>
    )
}
export default Contact