import React, {useState, useRef, useEffect} from "react";
import PYTYM from '../../assets/PYTYM.png'
import trutro from '../../assets/trutro.png'
import { IMG ,  ContentPortfolio, Background, ContentScroll} from "./styles";
const Portfolio = () =>{
    const images = [PYTYM,trutro,'https://pbs.twimg.com/profile_images/1487666635959947264/YmXr1AtO_400x400.jpg']
    const LENGTH = images.length
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0])

    const [previousIndex,setPreviousIndex] = useState(LENGTH)
    const [previousImage, setPreviousImage] = useState(images[LENGTH-1])

    const [nextImage, setNextImage] = useState(images[1])
    const [nextIndex, setNextIndex] = useState(images[1])

    const [loaded, setLoaded] = useState(false)
    const selectNewImage = (selectedIndex, images, next=true) => {
        setLoaded(false)
        const condition = next ? selectedIndex < LENGTH - 1 : selectedIndex > 0
        const nextIndex =
            next ? condition ? selectedIndex +1 : 0
            :
            condition ? selectedIndex - 1 : LENGTH - 1

            setSelectedImage(images[nextIndex])
            setSelectedIndex(nextIndex)

            /*
            if ( nextIndex == 0 ){
                setPreviousIndex(LENGTH - 1)
                setPreviousImage(images[LENGTH - 1])
                setNextImage[ 1 ]
            }else{
                setPreviousIndex(nextIndex - 1)
                setPreviousImage(images[nextIndex - 1])
                
            }

            if ( nextIndex == LENGTH - 1){
                setNextImage(images[0])
            }else{
                setNextImage(images[nextIndex + 1])
            }*/
            
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
    
    return(
        <>
        <Background>
            <IMG loading="lazy" src={`${previousImage}`} alt="img1" onClick={Previous} className="carr"/>
            <IMG loading="lazy" src={`${selectedImage}`} alt="img2" className={loaded? 'loaded' : ''} onLoad={()=>setLoaded(true)}/>
            <IMG loading="lazy" src={`${nextImage}`} alt="img3" onClick={Next} className="carr"/>
        </Background>
        <button onClick={Previous}> {'<'} </button>
        <button onClick={Next}> {'>'} </button>
        </>
    )
}
export default Portfolio

/*
const Img1 = useRef(null)
    const Img2 = useRef(null)
    const [click, setClick] = useState({
        port1:false,port2:false, port3:false
    });

    const ChangePosition = (ev) =>{
        Img1.current.id = 'second'
        Img2.current.id = 'first'
        
    }

*/



/*
<>
        <ContentScroll id="Portfolio">
            <h2>Portfolio</h2>
            <Background>
                <ContentPortfolio>
                        <IMG ref={Img1} onClick={ChangePosition} id="first" src={'data:image/jpeg;base64,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'} alt="PYTYM project" />
                </ContentPortfolio>
                <ContentPortfolio>
                        <IMG ref={Img2} id="second" src={PYTYM} alt="PYTYM project" />
                </ContentPortfolio>
                <ContentPortfolio>
                        <IMG id="last" src={PYTYM} alt="PYTYM project" />
                </ContentPortfolio>
            </Background>
        </ContentScroll> 
        </>

*/