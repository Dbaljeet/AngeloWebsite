import styled from "styled-components"
const Curriculum = styled.a`
  text-decoration: none;
  color: #d6d6d6;
  background-color: transparent;
  border: 2px solid #b2d1b5;
  font-size: 1.5rem;
  padding: 1rem;
  margin-bottom: 100px;
  cursor: pointer;

  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);

  &:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    direction: rtl;
    z-index: -1;
    box-shadow: -7px -7px 20px 0px #92c77499, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    transition: all 0.9s ease;
  }
  &:hover {
    color: #ffffff;
  }
  &:hover:after {
    left: auto;
    right: 0;
    width: 100%;
  }
  &:active {
    top: 2px;
  }
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
