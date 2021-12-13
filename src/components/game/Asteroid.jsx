import React from 'react'
import styled from 'styled-components'
import {useEffect,useState} from 'react';
import tw from 'twin.macro';
import Missle from './Missle'

let Asteroid = () => {

let [randomTop,setRandomtop] = useState([]);
let [timer,setTimer] = useState(Date.now())
let ran = Math.floor(Math.random()*500)




useEffect(()=>{

    setInterval(() => {
        
        setTimer(Date.now()) 
    },10000);
    
},[])

console.log(randomTop);

useEffect(()=>{

    setRandomtop(ran);
},[timer])


    
let AsteroidMove = styled.div`
position: relative;
top: ${randomTop+'px'};
   
`;




    return (
    



        <AsteroidMove>

        <div className=' bg-asteroid  w-26 h-36  animate-astero-back bg-no-repeat'>
        </div>
          
</AsteroidMove>
        
     
       
       
    )
}

export default Asteroid
