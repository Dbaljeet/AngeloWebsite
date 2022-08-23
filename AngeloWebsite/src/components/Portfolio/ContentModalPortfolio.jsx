import React from "react";
import styled from "styled-components";
import GithubImg from '../../assets/Github.svg'

//400 16px/24px Google Sans Text,Arial,Helvetica,sans-serif

const ContainerContent = styled.div`
    font-family: 'Noto Sans', sans-serif;
    border-top:1px solid #000;
    text-align:center;
    display:grid;
    padding:0 10px;
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
        gap:10px;
        justify-content:space-evenly;
    }
`

const Tittle = styled.h2`
    font-size:3rem;
    grid-area: 1 / 3 / 2 / 4;
`
const IMG = styled.img`
    width:20em;
    @media screen and (min-width:622px){
        grid-area: 1 / 4 / 4 / 6;
        width:20em;
        margin:auto;
    }
`

const IMG2 = styled.img`
    width:10em;
    @media screen and (max-width:622px){
        width:2em;
    }
`

const Deploy = styled.a`
    text-decoration:none;
    grid-area: 2 / 1 / 3 / 3;
`

const Repo = styled.a`
    text-decoration:none;
    display:flex;
    flex-direction:column;
    align-items:center;
    grid-area: 2 / 3 / 3 / 4;

    &>p{
        text-align:center;
        margin-bottom:10px;
    }
`

const INFO = styled.h3`
    grid-area: 3 / 1 / 4 / 6;
    align-self:end;
    padding: 0 0 20px 0;
    @media screen and (max-width:622px){
        align-self:center;
        padding: 10px 0;
    }
`

const ContentInfo = styled.p`
    grid-area: 4 / 1 / 6 / 6;
    @media screen and (min-width:622px){
        padding: 0 200px;
    }
`

//.div1 { grid-area: 2 / 1 / 3 / 2; }
//.div2 { grid-area: 3 / 1 / 4 / 2; }
const ContentPortfolio = ({ Name ,selectedIMG , Github , deploy, Info}) =>{
    return(
        <>
            <ContainerContent>
                <Tittle> {Name} </Tittle>
                
                <Deploy href = { deploy } target='_blank' >visitar sitio web
                </Deploy>
                <Repo href = { Github } target='_blank' >
                    <p>ver repositorio</p>
                    <IMG2 src={GithubImg}></IMG2>
                </Repo>   
                <INFO>¿De qué trata?</INFO>
                <ContentInfo>{Info}</ContentInfo>
                <IMG src={selectedIMG}></IMG>
            </ContainerContent>
        </>
    )
}
export default ContentPortfolio