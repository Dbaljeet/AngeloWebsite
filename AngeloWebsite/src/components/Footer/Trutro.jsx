import React, {useState} from 'react';
import trutro from '../../assets/trutro.png'
import { Img } from "./styles";
const Trutro = () =>{
    const [active, setactive] = useState(false)
    return(
        <>
            <Img className={`${active? 'active':''}`} src={trutro} alt="React logo" /> 
        </>
    )
}
export default Trutro