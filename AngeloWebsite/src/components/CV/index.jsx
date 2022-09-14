import styled from "styled-components"
const Curriculum = styled.a`
  display: block;
  border-radius: 10px;
  border: 2px solid #fff;
  padding: 20px;
  width: 100px;
  margin: auto;
  margin-bottom: 100px;
  text-decoration: none;
`
const CV = () => {
  return (
    <>
      <Curriculum
        target='_blank'
        href='https://drive.google.com/file/d/1fDx-p-xMEW6AYw_qzQYUk9ulMm8SDlV6/view?usp=sharing'
      >
        Ver CV
      </Curriculum>
    </>
  )
}
export default CV
