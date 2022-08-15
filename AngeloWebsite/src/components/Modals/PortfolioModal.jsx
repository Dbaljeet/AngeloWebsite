import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ContentModal = styled.div`
    
    position:fixed;
    z-index:99;
    
    background-color:#3d2f3d;
    padding:40px;
    padding-top:2px;
    padding-left:7px;
    backdrop-filter: blur(2px);
    @media screen and (min-width: 765px){
        bottom:5%;
        top: 10%;;
        left:10%;
        right:10%;
    }
    @media screen and (max-width: 765px){
        top:0%;
        bottom:0%;
        left:0%;
        right:0%;
    }

    &.close {
        width: 32px;
        height: 40px;
        opacity: 1;
    }
    &.close:before, .close:after {
        position: absolute;
        content: ' ';
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
`;

const CloseModal = styled.button.attrs(props => ({
    onClick: props.onClick,
}))`
    border:none;
    background-color:transparent;
    cursor:pointer;
    margin-bottom:20px;
`;

export const ModalPortfolio = ({children, onClose})=>{
    return <ContentModal>
        <CloseModal className="close" onClick={onClose}></ CloseModal>
        <>{children}</>
        
    </ContentModal>
};
export const ModalPortalPortfolio = ({children, onClose}) =>{
    return ReactDOM.createPortal(<ModalPortfolio onClose={onClose}>{children}</ModalPortfolio>
    , document.getElementById("modal-root")
)}