import styled from 'styled-components'
import TwitterSvg from '../../assets/Twitter.jsx'
import Youtube from '../../assets/Youtube.jsx'
const Label = styled.label`
  font-size: 2rem;
`
const Figure = styled.figure`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  :hover {
    & > a:hover {
      & > .IMG {
        filter: blur(8px);
        opacity: 0.4;
      }
      & > svg {
        transform: translate3d(0, 100px, 0);
        opacity: 1;
      }
    }
  }
`

const IMG = styled.img`
  max-width: 100%;
  width: 300px;
  outline: 2px solid #709460;
  border-radius: 2px;
  height: 250px;
  object-fit: cover;
  @media screen and (max-width: 622px) {
    width: 250px;
  }
  transition: opacity 2s ease, filter 1s ease;
`

const A = styled.a`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  width: 250px;
  color: '#fff';
`

const Referente = ({ name, image, isTwitter, twitter }) => {
  return (
    <>
      <Figure>
        <A target='_blank' href={twitter}>
          <IMG
            className='IMG'
            loading='lazy'
            src={image}
            alt={`imagen de ${name}`}
          />
          {isTwitter === false ? <Youtube /> : <TwitterSvg />}
        </A>
        <Label>{name}</Label>
      </Figure>
    </>
  )
}

export default Referente
