import React from 'react'
import styled from 'styled-components';
import missle from './../../images/missle.png';
import {useState,useEffect} from 'react'

const Missle = () => {
    

    const [movement,setMovement] = useState(0)

    
    
    const Shoot = () =>{
        for(let i=0; i<window.innerWidth; i++){
            
        setMovement(window.innerWidth-i)
        }

    }


// useEffect(() => {
//     setMovement(400)
    
// },[])

        const Rocket =  styled.img`
        position: absolute;
        overflow: hidden;
        left: ${movement + 'px'};
        z-index: 100;
        width: 150px;
        height: 100px;
        `

    
    return (
        <div onClick={Shoot}>
           <Rocket src={missle}/>
        </div>
    )
}

export default Missle
