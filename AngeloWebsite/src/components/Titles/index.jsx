import styled from 'styled-components'
export const PrincipalTitle = styled.h1`
    color:${props => props.colorRef};
    background-color:transparent;
    border:2px solid #b2d1b5;
    display:inline-block;
    padding: 20px 100px;
    margin: 100px 0;
    //-webkit-text-stroke: 0.1px #000;
`
export const AboutInf = styled.h2`
    color:#fff;
`

export const  SecondaryTitle = styled.h2`
    color: ${props => props.colorRef};
    background-color:#b2d1b5;
    display:block;
    padding: 20px 100px;
`