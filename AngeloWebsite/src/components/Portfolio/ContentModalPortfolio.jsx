import React from "react"
import styled from "styled-components"
import GithubImg from "../../assets/Github"

//400 16px/24px Google Sans Text,Arial,Helvetica,sans-serif

const ContainerContent = styled.div`
  font-family: "Noto Sans", sans-serif;
  border-top: 1px solid #000;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  width: 100%;
  height: 100%;
  gap: 40px;
  padding: 15px 0;

  justify-items: center;

  @media screen and (max-width: 740px) {
    padding: 30px 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    max-width: 100%;
    max-height: 100%;
  }
`

const Tittle = styled.h2`
  font-size: 3rem;
  text-align: center;
`
const IMG = styled.img`
  max-width: 300px;
  align-self: center;
  @media screen and (max-width: 765px) {
    max-width: 250px;
  }
`

const Deploy = styled.a`
  text-decoration: none;
  font-size: 1.5rem;

  font-weight: bold;
  color: #b8b6b6;
  &:hover {
    color: #fff;
  }
  transition: color 1s;
  & > label {
    cursor: pointer;
  }
`

const Repo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #b8b6b6;
  &:hover {
    color: #fff;
  }
  transition: color 1s;
  & > label {
    cursor: pointer;
  }
`

const INFO = styled.h3`
  margin-bottom: 10px;
`

const ContentInfo = styled.p`
  font-size: 0.9rem;

  @media screen and (min-width: 622px) {
    font-size: 1.5rem;
  }
`
const ContentPortfolio = ({ Name, selectedIMG, Github, deploy, Info }) => {
  return (
    <>
      <Tittle> {Name} </Tittle>
      <ContainerContent>
        <IMG src={selectedIMG}></IMG>

        <Repo href={Github} target='_blank'>
          <label>ver repositorio</label>
          <GithubImg width={"8rem"} />
        </Repo>
        <div>
          <INFO>¿De qué trata?</INFO>
          <ContentInfo>{Info}</ContentInfo>
        </div>
        <Deploy href={deploy} target='_blank'>
          <label>
            {Name === "PYTYM" ? "Aún no desplegado" : "visitar sitio web"}
          </label>
        </Deploy>
      </ContainerContent>
    </>
  )
}
export default ContentPortfolio
