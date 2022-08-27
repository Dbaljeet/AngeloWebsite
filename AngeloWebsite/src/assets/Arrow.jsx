//<!-- License: CC Attribution. Made by remartwork: https://dribbble.com/remartwork -->
import styled from "styled-components"
const ARROW = styled.button`
    background-color:transparent;
    cursor: pointer;
    width:100px;
    ${props=>props.left && 'transform:rotateY(3.142rad)'};
    border:none;
    color:${props=>props.color};
    &:hover{
        color:#fff;
    }
    transition: color 1s;

`
const Arrow = ({width, left, onClick, color}) =>{
    return(
        
        <>
        <ARROW width={width} left={left} onClick={onClick} color={color}>
            <svg width={width} height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.6907 4.88654C21.5876 3.54633 20.5567 2.41231 19.1134 2.30922C17.0515 2.10303 14.1649 1.99994 12 1.99994C9.83505 1.99994 6.94845 2.10303 4.8866 2.30922C4.16495 2.30922 3.54639 2.6185 3.13402 3.13396C2.72165 3.64942 2.41237 4.16489 2.30928 4.88654C2.10309 6.94839 2 9.83499 2 11.9999C2 14.1649 2.20619 17.0515 2.30928 19.1133C2.41237 20.4535 3.4433 21.5876 4.8866 21.6907C6.94845 21.8968 9.83505 21.9999 12 21.9999C14.1649 21.9999 17.0515 21.7938 19.1134 21.6907C20.4536 21.5876 21.5876 20.5566 21.6907 19.1133C21.8969 17.0515 22 14.1649 22 11.9999C22 9.83499 21.8969 6.94839 21.6907 4.88654ZM16.9485 11.9653L13.2371 16.6391C13.134 16.8453 12.9278 16.9484 12.6186 16.9484C12.4124 16.9484 12.3093 16.8453 12.1031 16.7422C11.7938 16.4329 11.6907 16.0206 12 15.7113L14.4742 12.8247H7.87629C7.46392 12.8247 7.05155 12.5154 7.05155 11.9999C7.05155 11.4845 7.36082 11.1752 7.87629 11.1752H14.3711L11.8969 8.2886C11.5876 7.97932 11.6907 7.46386 12 7.25767C12.3093 6.94839 12.8247 7.05148 13.0309 7.36076L16.9485 11.9653Z" 
            fill="currentColor"/>
            </svg>
        </ARROW>
        </>
    )
}
export default Arrow