import styled, { keyframes } from "styled-components";

export const ContentScroll = styled.div`
    margin: 50px 0;
    width:100%;
    height:auto;
`


export const IMG = styled.img`
    object-fit:cover;
    max-width:500px;
    min-width:200px;
    width:100%;
    opacity:0;
    transition: all 1s;
    align-self:center;
    &.loaded{
      opacity:1;
      align-self:center;
    }
    &.carr{
      object-fit:cover;
      opacity:0.2;
      width:1fr;
      min-width:60px;
      max-height:450px;
      cursor: pointer;
      &:hover{
        animation: op 2s ease 0.2s 1;
      }
    }

  @keyframes op {
    from {
      opacity:0.2;
    }
    to {
      opacity:0.6
    }
}
`

/*
&#first{
        opacity: 0.4;
        transform:translate3d(20px,0,0);
    }
    &#second{
        opacity:1;
        transform:translate3d(-20px,0,0);
    }
    &#last{
        opacity: 0.4;

    }
 grid-column-start: 1;
 grid-column-end:2;
*/
export const ContentPortfolio = styled.div`
  min-height: 200px;
  min-width: 250px;
  width:100%;
  height:auto;
  @media screen and (max-width: 622px){
    margin:20px;
  }
`

export const Background = styled.section `
  border: 10px solid #1f1e1e;
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
    grid-template-rows: 2fr;
    grid-column-gap: 15px;
    grid-row-gap: 0px;
    
    
    justify-items:center;
  }
  
`