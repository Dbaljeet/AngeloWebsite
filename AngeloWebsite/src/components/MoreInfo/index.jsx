import { ButtonShowMore } from '../Titles/index'
import Referentes from "../Referentes";
import { useState } from 'react';
const MoreInfo = () =>{
    const [ clicked, setClicked ] = useState ( false )

    

    return(
        <>
            <ButtonShowMore className={`${clicked ? 'cliked' : ''}`} onClick={()=>setClicked(true)}>Más sobre mí</ButtonShowMore>
            { clicked &&
                <>
                    <Referentes></Referentes>
                </>
            }
        </>
    )
}
export default MoreInfo