import styled from 'styled-components'

export const Img = styled.img`
  background-color: none;
  margin: auto;
  width: 80px;
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