import React from 'react'
import { SecondaryTitle } from '../Titles'
import { ContainRef, Why } from './styles'
import Referente from '../Referente'
import Midudev from '../../assets/Midudev.jpg'
import HolaMundo from '../../assets/HolaMundo.jpg'
import FHerrera from '../../assets/FernandoHerrera.svg'
import Morsa from '../../assets/Morsa.jpg'
const Referentes = () => {
  const info = [
    {
      name: 'midudev',
      image: Midudev,
      twitter: 'https://twitter.com/midudev',
      isTwitter: true,
    },
    {
      name: 'HolaMundo',
      image: HolaMundo,
      twitter: 'https://twitter.com/_nasch_',
      isTwitter: true,
    },
    {
      name: 'Fernando Herrera',
      image: FHerrera,
      twitter: 'https://twitter.com/Fernando_Her85',
      isTwitter: true,
    },
    {
      name: 'Codigo Morsa',
      image: Morsa,
      twitter: 'https://www.youtube.com/c/CódigoMorsa/',
      isTwitter: false,
    },
  ]

  return (
    <>
      <SecondaryTitle id='Men'>Referentes</SecondaryTitle>
      <Why>
        Estas son personas que para mí son un ejemplo a seguir en el área
      </Why>
      <ContainRef>
        {info.map(({ name, image, twitter, isTwitter }) => (
          <Referente
            key={name}
            name={name}
            image={image}
            twitter={twitter}
            isTwitter={isTwitter}
          />
        ))}
      </ContainRef>
    </>
  )
}
export default Referentes
