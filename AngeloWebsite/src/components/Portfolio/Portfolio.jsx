import React, {useState, useRef, useEffect} from "react";
import PYTYM from '../../assets/PYTYM.png'
import trutro from '../../assets/trutro.png'
import { IMG , Background, Section} from "./styles";
import {ModalPortalPortfolio} from '../Modals/PortfolioModal'
import ContentPortfolio from './ContentModalPortfolio'
const Portfolio = () =>{
    const images = [PYTYM,trutro,'https://pbs.twimg.com/profile_images/1487666635959947264/YmXr1AtO_400x400.jpg',trutro]
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
            <h2>Portfolio</h2>
            <Background>
                <IMG loading="lazy" src={`${previousImage}`} alt="img1" onClick={Previous} className="carr"/>
                <IMG loading="lazy" onClick={()=>setShowModal(true)} src={`${selectedImage}`} alt="img2" className={loaded? 'loaded' : ''} onLoad={()=>setLoaded(true)}/>
                { showModal &&
                <ModalPortalPortfolio onClose={handleClose}>
                    <ContentPortfolio selectedIMG = {selectedImage}></ContentPortfolio>
                </ModalPortalPortfolio>
                }
                <IMG loading="lazy" src={`${nextImage}`} alt="img3" onClick={Next} className="carr"/>
            </Background>
            <div>
                {where}
            </div>
            <button onClick={Previous}> {'<'} </button>
            <button onClick={Next}> {'>'} </button>
        </Section>
        </>
    )
}
export default Portfolio