import styled, { keyframes } from "styled-components";

export const ContentScroll = styled.div`
    margin: 50px 0;
    width:100%;
    height:auto;
`
export const Section = styled.section`
  padding:10px 0;
  width:100%;
  @media screen and (max-width: 622px) {
    outline: 2px solid #b2d1b5;
  }
`
export const FigureCenter = styled.figure`
  align-self:center;
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  cursor: pointer;


  &:hover {
    transition: color 1s;
    &::before, &:hover:after {
      animation: none;
      opacity: 0;
    }
  }

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    filter: blur(calc(var(--card-height) / 6));
    background-image: linear-gradient(
    var(--rotate)
    , #5dffb3, #8b467e 43%, #50e0d8);
    opacity: 1;
    transition: opacity .5s;
    animation: spin 5.5s linear infinite;

    @media screen and (min-width:622px){
      transform: scale(1.2);
    }
    @media screen and (max-width:622px){
      transform: scale(1);
    }
  }

  @keyframes spin {
    0% {
      --rotate: 0deg;
    }
    100% {
      --rotate: 360deg;
    }
  }

  @property --rotate {
    syntax: "<angle>";
    initial-value: 132deg;
    inherits: false;
  }
`

export const IMG = styled.img`
    will-change: opacity;
    z-index:1;
    cursor: pointer;
    object-fit:cover;
    max-width:500px;
    min-width:200px;
    width:100%;
    opacity:0.2;
    transition: Spawn 1s;
    align-self:center;
    &.loaded{
      opacity:1;
      animation : Spawn 1.5s ease 0s 1 normal;
    }
    &.carr{
      object-fit:cover;
      opacity:0.2;
      width:1fr;
      min-width:40px;
      max-height:450px;
      @media screen and (max-width: 622px) {
        display:none;
      }
    }
  
    @keyframes Spawn {
      from {
        opacity: 0.5;
      }
      to {
        opacity: 1;
      }
    }
`

export const Figure = styled.figure`
  align-self:center;
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
    grid-template-columns:0.1fr 2fr 0.1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 2px;
    grid-row-gap: 0px;
    min-height:400px;
    justify-items:center;
  }
  
`
export const Amount = styled.label`
  display:block;
  color:#fff;
`