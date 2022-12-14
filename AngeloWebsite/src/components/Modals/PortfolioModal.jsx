import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

const ContentModal = styled.div`
  overflow-y: auto;
  position: absolute;
  z-index: 101;
  padding-top: 2px;
  width: 80%;
  max-height: 80vh;

  backdrop-filter: blur(2px);
  @media screen and (min-width: 765px) {
    top: 10%;
    left: 10%;
    padding-left: 7px;
    animation: Back 0.8s;
  }
  @media screen and (max-width: 765px) {
    top: 10%;
    left: 10%;
  }

  &.close {
    width: 32px;
    height: 40px;
    opacity: 1;
  }
  &.close:before,
  .close:after {
    position: absolute;
    content: " ";
    height: 33px;
    width: 3px;
    top: 10px;
    background-color: rgb(255, 250, 250);
  }
  &.close:before {
    transform: rotate(45deg);
  }
  &.close:after {
    transform: rotate(-45deg);
  }
  background-image: linear-gradient(
    to bottom,
    #7f4d7f,
    #49598c,
    #005f80,
    #005e63,
    #315947
  );

  @keyframes Back {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
`

const CloseModal = styled.button.attrs((props) => ({
  onClick: props.onClick,
}))`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-bottom: 20px;
`

const Background = styled.div`
  position: fixed;
  z-index: 100;
  background-color: #000000ba;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  animation: Backgroundd 1s;

  @keyframes Backgroundd {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
const Cont = styled.div`
  position: fixed;
  width: 100%;
  z-index: 101;
  left: 0;
  top: 25%;
  @media screen and (max-width: 740px) {
    top: 10%;
  }
`

export const ModalPortfolio = ({ children, onClose }) => {
  return (
    <>
      <Background></Background>
      <Cont>
        <ContentModal>
          <CloseModal className='close' onClick={onClose}></CloseModal>
          <>{children}</>
        </ContentModal>
      </Cont>
    </>
  )
}
export const ModalPortalPortfolio = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <ModalPortfolio onClose={onClose}>{children}</ModalPortfolio>,
    document.getElementById("modal-root")
  )
}
