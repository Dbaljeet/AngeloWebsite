import styled from 'styled-components'
export const PrincipalTitle = styled.h1`
    color:${props => props.colorRef};
    background-color:transparent;
    border:2px solid #b2d1b5;
    display:inline-block;
    padding: 20px 100px;
    margin: 100px 0;
    font-size:3rem;
    //-webkit-text-stroke: 0.1px #000;
`


export const  SecondaryTitle = styled.h2`
    text-align:center;
    color: ${props => props.colorRef};
    display:block;
    padding: 0px;
    font-size:2.5rem;
`

export const ButtonShowMore = styled.button`
    color:#d6d6d6;
    background-color:transparent;
    border:2px solid #b2d1b5;
    font-size:2.5rem;
    padding:3rem;
    margin-bottom:20rem;
    cursor: pointer;

    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
        7px 7px 20px 0px rgba(0,0,0,.1),
        4px 4px 5px 0px rgba(0,0,0,.1);

    &:after {
        position: absolute;
        content: "";
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        direction: rtl;
        z-index: -1;
        box-shadow:
            -7px -7px 20px 0px #92c77499,
            -4px -4px 5px 0px #fff9,
            7px 7px 20px 0px #0002,
            4px 4px 5px 0px #0001;
        transition: all 0.3s ease;
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