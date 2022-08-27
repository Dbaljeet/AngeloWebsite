import styled from "styled-components";

export const ContentScroll = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    margin: 70px 0 100px 0;
    @media screen and (max-width: 622px){
        outline: 2px solid #b2d1b5;
    }
`
export const ContentContainer = styled.a`
    margin:auto;
    justify-content:space-around;
    color:${props=>props.color};
    transition: all 2s;
    &:hover{
        color:#fff;
        -webkit-transform:scale(1.25);
        -moz-transform:scale(1.25);
        -ms-transform:scale(1.25);
        -o-transform:scale(1.25);
        transform:scale(1.25);
    }
`

export const IMG = styled.img`
    width:${props=>props.width};
    padding:30px 0;
`