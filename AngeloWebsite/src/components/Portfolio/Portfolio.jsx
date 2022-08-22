import React, {useState, useRef, useEffect} from "react";
import PYTYM from '../../assets/PYTYM.png'
import GiphyAll from '../../assets/GiphyAll.png'
import Arrow from '../../assets/Arrow.svg'
import { Figure, IMG , Background, Section, ARROW} from "./styles";
import { SecondaryTitle } from '../Titles/index'

import {ModalPortalPortfolio} from '../Modals/PortfolioModal'
import ContentPortfolio from './ContentModalPortfolio'
const Portfolio = () =>{
    const images = [ PYTYM ,GiphyAll ]
    const LENGTH = images.length
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0])

    const where = `${selectedIndex+1}/${LENGTH}`

    const [previousIndex,setPreviousIndex] = useState(LENGTH)
    const [previousImage, setPreviousImage] = useState(images[LENGTH-1])

    const [nextImage, setNextImage] = useState(images[1])
    const [nextIndex, setNextIndex] = useState(images[1])

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
            setPreviousIndex(LENGTH - 1)
            setPreviousImage(images[LENGTH - 1])
            setNextImage[ 1 ]
        }else{
            setPreviousIndex(selectedIndex - 1)
            setPreviousImage(images[selectedIndex - 1])
            
        }

        if ( selectedIndex == LENGTH - 1){
            setNextImage(images[0])
        }else{
            setNextImage(images[selectedIndex + 1])
        }
    }, [selectedIndex]);

    useEffect(() => {
        const interval = setInterval(() =>{
            selectNewImage(selectedIndex, images)
        }, 5000)
        return () => clearInterval(interval)
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
                <Figure>
                <IMG loading="lazy" onClick={()=>setShowModal(true)} src={`${selectedImage}`} alt="img2" className={loaded? 'loaded' : ''} onLoad={()=>setLoaded(true)}/>
                </Figure>

                { showModal &&
                <ModalPortalPortfolio onClose={handleClose}>
                    <ContentPortfolio selectedIMG = {selectedImage}></ContentPortfolio>
                </ModalPortalPortfolio>
                }

                <Figure>
                    <IMG loading="lazy" src={`${nextImage}`} alt="img3" onClick={Next} className="carr"/>
                </Figure>
            </Background>
            <div>
                {where}
            </div>
            

                <ARROW onClick={Previous} src={Arrow} left={true}></ARROW>



                <ARROW onClick={Next} src={Arrow} left={false}></ARROW>

        </Section>
        </>
    )
}
export default Portfolio