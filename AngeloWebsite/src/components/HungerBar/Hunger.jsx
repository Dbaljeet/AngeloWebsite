import React, {useState} from 'react';
import trutro from '../../assets/trutro.png'
import { Img } from "./styles";
const Hunger = ({active}) =>{
    return(
        <>
            <Img className={`${active? 'active':''}`} src={trutro} alt="Hunger" /> 
        </>
    )
}
export default Hunger