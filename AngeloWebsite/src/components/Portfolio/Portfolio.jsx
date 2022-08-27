import React, {useState, useRef, useEffect} from "react";
import PYTYM from '../../assets/PYTYM.png'
import GiphyAll from '../../assets/GiphyAll.png'
import Arrow from '../../assets/Arrow'
import { Figure,FigureCenter, IMG , Background, Section, Amount } from "./styles";
import { SecondaryTitle } from '../Titles/index'

import {ModalPortalPortfolio} from '../Modals/PortfolioModal'
import ContentPortfolio from './ContentModalPortfolio'
const Portfolio = () =>{
    const images = [ PYTYM ,GiphyAll ]
    const InfoRep = {
        'names' : ['PYTYM', 'GiphyAll'],
        'github': ['https://github.com/SouLKy/ProyectoSoftwareBasadoEnPlataforma', 'https://github.com/Dbaljeet/GiphyAllWeb'],
        'deploy': ['','https://giphy-all-web.vercel.app'],
        'info' : ['Proyecto donde se pueden cargar datos de una cuenta bancaria, más información en github','Es un proyecto donde se pueden visualizar gifs']
    }
    const LENGTH = images.length
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0])

    const where = `${selectedIndex+1}/${LENGTH}`


    const [previousImage, setPreviousImage] = useState(images[LENGTH-1])

    const [nextImage, setNextImage] = useState(images[1])

    const [loaded, setLoaded] = useState(false)

    const [showModal, setShowModal] = useState(false)

    const selectNewImage = (selectedIndex, images, next=true) => {
        setLoaded(false)
        const condition = next ? selectedIndex < LENGTH - 1 : selectedIndex > 0
        const nextIndex =
            next ? condition ? selectedIndex +1 : 0
            :
            condition ? selectedIndex - 1 : LENGTH - 1

            setSelectedImage(images[nextIndex])
            setSelectedIndex(nextIndex)
            
    };
    useEffect(() => {
        if ( selectedIndex == 0 ){
            
            setPreviousImage(images[LENGTH - 1])
            setNextImage[ 1 ]
        }else{
            
            setPreviousImage(images[selectedIndex - 1])
            
        }

        if ( selectedIndex == LENGTH - 1){
            setNextImage(images[0])
        }else{
            setNextImage(images[selectedIndex + 1])
        }
    }, [selectedIndex]);

    useEffect(() => {
        if (!showModal){
            const interval = setInterval(() =>{
            selectNewImage(selectedIndex, images)
            }, 5000)
            return () => clearInterval(interval)
        }
    },);

    const Previous = () =>{
        selectNewImage(selectedIndex, images, false)
    }

    const Next = () =>{
        selectNewImage(selectedIndex, images)
    }

    const handleClose = () => {
        setShowModal(false);
    }
    
    return(
        <>
        <Section id = "Portfolio">
            <SecondaryTitle>Portfolio</SecondaryTitle>
            <Background>
                <Figure>
                    <IMG loading="lazy" src={`${previousImage}`} alt="img1" onClick={Previous} className="carr"/>
                </Figure>
                <FigureCenter>
                    <IMG loading="lazy" onClick={()=>setShowModal(true)} src={`${selectedImage}`} alt="img2" className={loaded? 'loaded' : ''} onLoad={()=>setLoaded(true)}/>
                </FigureCenter>

                

                <Figure>
                    <IMG loading="lazy" src={`${nextImage}`} alt="img3" onClick={Next} className="carr"/>
                </Figure>
            </Background>
            <Amount>
                {where}
            </Amount>
            

                <Arrow widht={'24px'} color="#ffffffb0" onClick={Previous} left={true}></Arrow>



                <Arrow widht={'24px'} color="#ffffffb0" onClick={Next} left={false}></Arrow>

        </Section>

        { showModal &&
            <ModalPortalPortfolio onClose={handleClose}>
            <ContentPortfolio selectedIMG = {images[selectedIndex]} Name = {InfoRep.names[selectedIndex]} Github = {InfoRep.github[selectedIndex]} deploy = {InfoRep.deploy[selectedIndex]} Info = {InfoRep.info[selectedIndex]} ></ContentPortfolio>
            </ModalPortalPortfolio>
        }

        </>
    )
}
export default Portfolio