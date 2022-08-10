import styled from "styled-components";
export const Nav = styled.nav`
    position:sticky;
    top:0;
    height:auto;
    width:100%;
    min-width:200px;
    color:#fff;
    text-align:center;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-around;
    border-bottom: 1px solid #c0c0c0;
    @media screen and (max-width: 622px){
        font-size:12px;
        background-color:#3c3c3c;
    }
    @media screen and (min-width: 622px){
        backdrop-filter: blur(20px);
    }

    

    ::before {  
        transform: scaleX(0);
        transform-origin: bottom right;
    content: " ";
        display: block;
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        inset: 0 0 0 0;
        background: rgb(156, 194, 139);
        z-index: -1;
        transition: transform .3s ease;
    }

    :hover::before {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`

export const Lista = styled.ul`
    width:100%;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;

    @media screen and (max-width: 622px){
        display:none;
        &.active{
            display:flex;
        }
        &.desactive{
            display:none;
        }
    }
`
export const Links = styled.a`
    
    text-decoration:none;
    color:#fff;
    :hover{
        color:#120733;
    }
    @media screen and (max-width: 622px){
        height:20px;
        width:100%;
    }
    @media screen and (min-width: 622px){
        height:40px;
    }
`