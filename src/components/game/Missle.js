import React from 'react'
import styled from 'styled-components';
import missle from './../../images/missle.png';
import {useState,useEffect} from 'react'

const Missle = () => {
    

    const [movement,setMovement] = useState([])

    
    
    const Shoot = () =>{
        for(let i=0; i<window.innerWidth; i++){
        console.log(i)
        setMovement(window.innerWidth-i)
        console.log(movement)
        }

    }

console.log(window.innerWidth)
// useEffect(() => {
//     setMovement(400)
    
// },[])

        const Rocket =  styled.img`
        position: absolute;

        
        z-index: 100;
        width: 250px;
        height: 100px;
        `

    
    return (
        <div onClick={Shoot}>

           <img src={missle} className='w-10 h-10 invisible' />
        </div>
    )
}

export default Missle
