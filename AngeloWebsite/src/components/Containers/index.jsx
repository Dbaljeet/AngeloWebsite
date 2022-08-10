import styled from "styled-components";



export const Background = styled.section `
  background-color:#1f1e1e;
  @media screen and (min-width: 622px){
    display:grid;
    grid-template-columns: repeat(3, 2fr);
    grid-template-rows: 2fr;
    grid-column-gap: 15px;
    grid-row-gap: 0px;
    margin-bottom:60PX;
    padding:20px;
  }

  @media screen and (max-width: 622px){
    display:flex;
    flex-wrap:wrap;
    margin:20px;
  }
  
`


export const ContentPortfolio = styled.div`
  min-height: 200px;
  min-width: 250px;
  width:100%;
  height:auto;
  @media screen and (max-width: 622px){
    margin:20px;
  }
`

export const ContainRef = styled.section`
  background-color:#1f1e1e;
  color:#fff;
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`

export const ContentRef = styled.div`
  min-height: 200px;
  min-width: 100px;
  width:100%;
  height:auto;
`

