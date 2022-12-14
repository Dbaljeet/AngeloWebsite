import React from "react"
import { PrincipalTitle } from "../components/Titles"
import Portfolio from "../components/Portfolio/Portfolio"
import About from "../components/About"
import Contact from "../components/Contact"
import Experience from "../components/Experience"
import MoreInfo from "../components/MoreInfo"
import CV from "../components/CV"
const Home = () => {
  return (
    <>
      <PrincipalTitle id='Home'>Angelo Berrios Pinto</PrincipalTitle>

      <About></About>
      <CV />
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
      <MoreInfo></MoreInfo>
    </>
  )
}
export default Home
