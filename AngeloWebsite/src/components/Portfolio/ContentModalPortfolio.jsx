import React from "react";
import styled from "styled-components";


const ContainerContent = styled.div`
    text-align:center;
    display:grid;
    padding:10px;
    width:100%;
    height:100%;
    grid-template-columns: repeat(2, 1fr) 2fr repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    justify-items:center;

    @media screen and (max-width:622px){
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-items:center;
        gap:10px;
    }
`

const Tittle = styled.h2`
    grid-area: 1 / 3 / 2 / 4;
`
const IMG = styled.img`
    width:20em;
    
    grid-area: 2 / 4 / 4 / 6;
`

const URL1 = styled.a`
    grid-area: 2 / 3 / 3 / 4;
`

const URL2 = styled.a`
    grid-area: 3 / 3 / 4 / 4;
`

const INFO = styled.h3`
    grid-area: 4 / 1 / 5 / 6;
    align-self:end;
    padding: 0 0 20px 0;
    @media screen and (max-width:622px){
        align-self:center;
        padding: 10px 0;
    }
`

const ContentInfo = styled.p`
    grid-area: 5 / 1 / 6 / 6;
`

//.div1 { grid-area: 2 / 1 / 3 / 2; }
//.div2 { grid-area: 3 / 1 / 4 / 2; }
const ContentPortfolio = ({selectedIMG}) =>{
    return(
        <>
            <ContainerContent>
                <Tittle>NAME</Tittle>
                <IMG src={selectedIMG}></IMG>
                <URL1>visitar sitio web</URL1>
                <URL2>ver repositorio</URL2>   
                <INFO>Información adicional</INFO>
                <ContentInfo>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis facilis quam voluptatum, tempore nemo, enim sequi facere esse ea provident fugit perferendis similique vero, voluptate totam ex sunt dolorum? Maxime?</ContentInfo>
            </ContainerContent>
        </>
    )
}
export default ContentPortfolio