import styled from 'styled-components'

export const Img = styled.img`
  background-color: none;
  margin: auto;
  width: 80px;
  height: auto;

  @media screen and (max-width: 500px){
    width:20px;
  }
  @media screen and (min-width: 500px){
    width: 40px;
  }

  &.active{
    filter: grayscale(100%);
    animation: des 2s;
    animation-iteration-count: 4;
  }  

  @keyframes des {
    0% {filter: grayscale(80%);}
    50%{filter: grayscale(0%);}
    100%{filter: grayscale(100%);}
  }
`;

export const HUDminecraft = styled.div`
  position:fixed;
  right:0;
  bottom:0;
`