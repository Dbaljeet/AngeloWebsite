import React from "react";
import styled from "styled-components";
import GithubImg from '../../assets/Github'

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
        justify-content:space-evenly;
        max-width:100%;
        max-height:100%;
    }
`

const Tittle = styled.h2`
    font-size:3rem;
    grid-area: 1 / 3 / 2 / 4;
`
const IMG = styled.img`
    @media screen and (max-width:622px){
        object-fit:contain;
        max-height:200px;
        margin-bottom:50px;
    }
    @media screen and (min-width:1340px){
        grid-area: 1 / 4 / 4 / 6;
        width:20em;
        margin:auto;
    }
    @media screen and (max-width:1340px) and (min-width: 622px){
        grid-area: 1 / 4 / 4 / 6;
        width:10rem;
        margin:auto;
    }
`

const Deploy = styled.a`
    text-decoration:none;
    font-size:1.5rem;
    grid-area: 2 / 1 / 3 / 3;
    font-weight: bold;
    color:#b8b6b6;
    &:hover{
        color:#fff;
    }
    transition:color 1s;
    &>label{
        cursor: pointer;
    }
`

const Repo = styled.a`
    font-size:1.5rem;
    font-weight: bold;
    text-decoration:none;
    display:flex;
    flex-direction:column;
    align-items:center;
    grid-area: 2 / 3 / 3 / 4;

    color:#b8b6b6;
    &:hover{
        color:#fff;
    }
    transition:color 1s;
    &>label{
        cursor: pointer;
    }
`

const INFO = styled.h3`
    grid-area: 3 / 1 / 4 / 6;
    align-self:end;
    padding: 0 0 20px 0;
    @media screen and (max-width:622px){
        align-self:center;
    }
`

const ContentInfo = styled.p`
    font-size:.9rem;
    grid-area: 4 / 1 / 6 / 6;
    @media screen and (min-width:622px){
        padding: 0 200px;
        font-size:1.5rem;
    }
`

//.div1 { grid-area: 2 / 1 / 3 / 2; }
//.div2 { grid-area: 3 / 1 / 4 / 2; }
const ContentPortfolio = ({ Name ,selectedIMG , Github , deploy, Info}) =>{
    return(
        <>
            <ContainerContent>
                <Tittle> {Name} </Tittle>
                
                <Deploy href = { deploy } target='_blank' >
                    <label>visitar sitio web
                    </label>
                </Deploy>
                <Repo href = { Github } target='_blank' >
                    <label>ver repositorio</label>
                    <GithubImg width={'8rem'}/>
                </Repo>   
                <INFO>¿De qué trata?</INFO>
                <ContentInfo>{Info}</ContentInfo>
                <IMG src={selectedIMG}></IMG>
            </ContainerContent>
        </>
    )
}
export default ContentPortfolio