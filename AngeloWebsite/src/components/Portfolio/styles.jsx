import styled from "styled-components";

export const ContentScroll = styled.div`
    margin: 50px 0;
    width:100%;
    height:auto;
`


export const IMG = styled.img`
    object-fit:contain;
    max-width:500px;
    width:100%;
    height:auto;
    opacity:0;
    transition: 1s;
    &.loaded{
      opacity:1;
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
  background-color:#1f1e1e;
  @media screen and (min-width: 622px){
    display:grid;
    grid-template-columns:2fr 4fr 2fr;
    grid-template-rows: 2fr;
    grid-column-gap: 15px;
    grid-row-gap: 0px;
    padding:20px;
  }

  @media screen and (max-width: 622px){
    display:flex;
    flex-wrap:wrap;
    margin:20px;
  }
  
`