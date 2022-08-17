import styled, { keyframes } from "styled-components";

export const ContentScroll = styled.div`
    margin: 50px 0;
    width:100%;
    height:auto;
`
export const Section = styled.section`
  outline: 6px solid #1f1e1e;
  padding:10px 0;
  width:100%;
`

export const IMG = styled.img`
    cursor: pointer;
    object-fit:cover;
    max-width:500px;
    min-width:200px;
    width:100%;
    opacity:0;
    transition: Spawn 1s;
    align-self:center;
    &.loaded{
      opacity:1;
      align-self:center;
      animation : Spawn 1.5s ease 0s 1 normal;
    }
    &.carr{
      object-fit:cover;
      opacity:0.2;
      width:1fr;
      min-width:40px;
      max-height:450px;
      @media screen and (max-width: 622px) {
        width:3em;
      }
    }
  
    @keyframes Spawn {
      from {
        opacity: 0.2;
      }
      to {
        opacity: 1;
      }
    }
`



export const Background = styled.section `
  @media screen and (min-width: 622px){
    display:grid;
    grid-template-columns:2fr 4fr 2fr;
    grid-template-rows: 2fr;
    grid-column-gap: 15px;
    grid-row-gap: 0px;
    padding:20px;
    height:500px;
    justify-items:center;
  }

  @media screen and (max-width: 622px){
    display:grid;
    grid-template-columns:1fr 2fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 2px;
    grid-row-gap: 0px;
    
    justify-items:center;
  }
  
`

export const ARROW = styled.img`
  background-color:transparent;
  cursor: pointer;
  width:100px;
  ${props=>props.left && 'transform:rotateY(3.142rad)'}
`