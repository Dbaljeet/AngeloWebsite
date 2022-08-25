import styled from "styled-components";

export const ContainRef = styled.section`
  
  
  color:#fff;
  @media screen and (min-width:622px){
    display:grid;
    grid-template-columns: repeat(2, 15rem);
    grid-template-rows: 1fr;
    grid-column-gap: 60px;
    grid-row-gap: 0px;
    justify-content:center;
    padding: 40px 0;
  }
  @media screen and (max-width:622px){
    display:flex;
    flex-direction:column;
    gap:3rem;
    padding: 10px 0;
  }
  
`

export const ContentRef = styled.div`
  min-height: 200px;
  min-width: 100px;
  width:100%;
  height:auto;
`

