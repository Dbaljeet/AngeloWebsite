import React from "react";
import PYTYM from '../../assets/PYTYM.png'
import { IMG } from "./styles";
import { Background , ContentPortfolio} from "../Containers";
const Portfolio = () =>{
    return(
        <>
            <h1>Portfolio</h1>
            <Background>
                <ContentPortfolio>
                        <IMG src={PYTYM} alt="PYTYM project" />
                </ContentPortfolio>
                <ContentPortfolio>
                        <IMG src={PYTYM} alt="PYTYM project" />
                </ContentPortfolio>
                <ContentPortfolio>
                        <IMG src={PYTYM} alt="PYTYM project" />
                </ContentPortfolio>
            </Background>
            
        </>
    )
}
export default Portfolio