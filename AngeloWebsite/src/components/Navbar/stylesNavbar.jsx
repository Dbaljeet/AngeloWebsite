import styled from "styled-components";
import {Link} from 'react-scroll'
export const Nav = styled.nav`
    z-index:99;
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
        background-color:${props=>props.open? '#366da0' : '#000'};
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
        @media screen and (min-width: 622px){
            background: rgb(156, 194, 139);
        }
        z-index: -1;
        transition: transform .8s ease;
    }

    :hover::before {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`

export const Lista = styled.div`
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
export const Hamburger = styled.div`
    z-index:3;
    display: none;
    @media screen and (max-width: 622px){
        
        width: 35px;
        height: 30px;
        margin: 10px 10px;
        margin-top:25px;
        position: absolute;
        top:0;
        right:0;
        cursor: pointer;
        display: inline-block;
        backdrop-filter: blur(3px);
        span{
            background-color:#fff;
            position: absolute;
            border-radius: 2px;
            transition: .3s cubic-bezier(.8, .5, .2, 1.4);
            width:100%;
            height: 4px;
            transition-duration: 500ms
        }
        span:nth-child(1){
            top:0px;
            left: 0px;
        }
        span:nth-child(2){
            top:13px;
            left: 0px;
            opacity:1;
        }
        span:nth-child(3){
            bottom:0px;
            left: 0px;
        }
        :not(#open):hover span:nth-child(1){
            transform: scaleX(.8);
        }
        :not(#open):hover span:nth-child(2){
            transform: scaleX(.5);
        }
        :not(#open):hover span:nth-child(3){
            transform: scaleX(.8);
        }
        &#open span:nth-child(1){
            transform: rotate(45deg);
            top: 13px;
        }
        &#open span:nth-child(2){
            opacity:0;
        }
        &#open span:nth-child(3){
            transform: rotate(-45deg);
            top: 13px;
        }
    }
`;


export const Links = styled(Link)`
    cursor:pointer;
    text-decoration:none;
    color:#fff;
    padding: 10px 55px;
    
    &.active{
        color:#f0094a;
    }

    :hover{
        color:#120733;
        background-color:#fff;
        
    }
    @media screen and (max-width: 622px){
        height:20px;
        width:100%;
        padding:30px 0;
        border: 1px solid #000;
    }
    @media screen and (min-width: 622px){
        height:40px;
    }

    width: 130px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    transition: all 0.3s ease;
    position: relative;
    
    width: 130px;
    height: 40px;
    line-height: 42px;
    padding: 0;
    border: none;
    background: transparent;
    :hover {
        color: #f0094a;
        background: transparent;
        box-shadow:none;
    }
    :before,
    :after{
        content:'';
        position:absolute;
        top:0;
        right:0;
        height:2px;
        width:0;
        background: #f0094a;
        box-shadow:
        -1px -1px 5px 0px #fff,
        7px 7px 20px 0px #0003,
        4px 4px 5px 0px #0002;
        transition:400ms ease all;
    }
    after{
        right:inherit;
        top:inherit;
        left:0;
        bottom:0;
    }
    :hover:before,
    :hover:after{
        width:100%;
        transition:800ms ease all;
    }



`

