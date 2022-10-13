import styled from 'styled-components'
export const Referentes = styled.div`
  max-width: 100%;
`

export const ContainRef = styled.section`
  color: #fff;
  @media screen and (min-width: 622px) {
    display: grid;
    grid-template-columns: repeat(2, 15rem);
    grid-template-rows: 1fr;
    grid-column-gap: 60px;
    grid-row-gap: 20px;
    justify-content: center;
    padding: 40px 0;
  }
  @media screen and (max-width: 622px) {
    display: inline-flex;
    flex-direction: column;
    gap: 3rem;
    padding: 10px 0;
  }
`
export const Why = styled.p`
  @media screen and (max-width: 622px) {
    padding: 0 2rem;
  }
`
