import styled from "styled-components";
import TwitterSvg from '../../assets/Twitter.svg'
const Label = styled.label`
    font-size:2rem;
`
const Figure = styled.figure`
    display:inline-flex;
    flex-direction:column;
    align-items:center;

    :hover{
        &>a:hover{
            &>.IMG{
                filter:blur(8px);
                opacity:0.4;
            }
            &>.Twitter{
                transform:translate3d(0,100px,0);
                opacity:1;
            }
        }
        
        
        
    }
`

const IMG = styled.img`
    max-width:100%;
    outline:2px solid #709460;
    border-radius: 2px;
    object-fit:cover;
    @media screen and (max-width:622px){
        width:250px;
    }
    
`

const Twitter = styled.img`
    position:absolute;
    opacity:0;
    transition: all 2s;
    color:#fff;
`

const A = styled.a`
    display:inline-flex;
    flex-direction:column;
    align-items:center;
    text-decoration:none;
    width:250px;
`

const Referente = ({name, image, twitter}) =>{
    return(
        <>
            <Figure>
                <A target='_blank' href={twitter}>
                    <IMG className="IMG" loading="lazy" onError={()=>parentNode.removeChild()} src={image} alt={`imagen de ${name}`}/>
                    <Twitter className="Twitter" src={TwitterSvg} />
                </A>   
                <Label>{name}</Label>
            </Figure>
        
        </>
    )
}

export default Referente