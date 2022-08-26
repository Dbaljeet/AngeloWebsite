import styled from "styled-components";
import TwitterSvg from '../../assets/Twitter.svg'
const Label = styled.label`
    font-size:2rem;
`
const Figure = styled.figure`
    display:flex;
    flex-direction:column;
    align-items:center;

    :hover{
        &>.IMG{
            
            filter:blur(8px);
        }
        &>.Twitter{
            transform:translate3d(0,100px,0);
            opacity:1;
        }
        
    }
`

const IMG = styled.img`
    max-width:100%;
    outline:2px solid #709460;
    border-radius: 2px;
    object-fit:cover;
    @media screen and (max-width:622px){
        width:60%;
    }
    
`

const Twitter = styled.img`
    opacity:0;
    position:absolute;
    transition: all 2s;
`

const Referente = ({name, image, twitter}) =>{
    return(
        <>
            <Figure>
                <IMG className="IMG" loading="lazy" onError={()=>parentNode.removeChild()} src={image} alt={`imagen de ${name}`}/>
                <Label>{name}</Label>
                <Twitter className="Twitter" src={TwitterSvg} />
            </Figure>
        </>
    )
}

export default Referente