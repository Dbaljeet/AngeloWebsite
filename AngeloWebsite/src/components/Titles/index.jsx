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