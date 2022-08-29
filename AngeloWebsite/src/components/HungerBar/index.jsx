import React, {useEffect, useState} from "react";
import Hunger from "./Hunger";
import {HUDminecraft} from '../HungerBar/styles'
const Footer = () =>{
    const [ posy, setPosy] = useState(window.scrollY)
    const [ sumposY, setSumposy] = useState(0)
    
    const [ actives, setActives] = useState({active1:false,active2:false,active3:false,active4:false,active5:false})

    const Screen = () =>{
        setPosy(window.scrollY)
    }
    
    useEffect(() => {
        window.addEventListener('scroll', Screen)
        return () =>{
            window.removeEventListener('scroll', Screen)
        }
    }, []);

    const limit = [10000, 50000, 60000, 70000, 90000]

    useEffect(() => {
        if (sumposY >= limit[0]) {
            actives.active1 = true
            setSumposy(0)
        }
        if (sumposY >= limit[1]) {
            actives.active2 = true
            setSumposy(0)
        }
        if (sumposY >= limit[2]) {
            actives.active3 = true
            setSumposy(0)
        }

        if (sumposY >= limit[3]) {
            actives.active4 = true
            setSumposy(0)
        }
        if (sumposY >= limit[4]) {
            actives.active5 = true
            setSumposy(0)
        }
        setSumposy(sumposY + posy)
    }, [posy]);

    return(
        <>
        <HUDminecraft> 
            <Hunger alt="HungerBarMinecraft1" active = {actives.active1}></Hunger>
            <Hunger alt="HungerBarMinecraft2" active = {actives.active2}></Hunger>
            <Hunger alt="HungerBarMinecraft3" active = {actives.active3}></Hunger>
            <Hunger alt="HungerBarMinecraft4" active = {actives.active4}></Hunger>
            <Hunger alt="HungerBarMinecraft5" active = {actives.active5}></Hunger>
        </HUDminecraft>
        </>
    )
}
export default Footer