import { ButtonShowMore } from "./style"
import Referentes from "../Referentes"
import Activities from "../Activities"
import { useState } from "react"
const MoreInfo = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
  }

  return (
    <>
      <ButtonShowMore
        id='Ref'
        className={`${clicked ? "cliked" : ""}`}
        onClick={handleClick}
        to='Ref'
        spy={true}
        smooth={true}
        offset={250}
        duration={500}
        delay={300}
        isDynamic={true}
      >
        Más sobre mí
      </ButtonShowMore>
      {clicked && (
        <>
          <div>
            <Activities></Activities>
            <Referentes></Referentes>
          </div>
        </>
      )}
    </>
  )
}
export default MoreInfo
