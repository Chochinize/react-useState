import React from 'react'
import styled from 'styled-components'
import {useEffect,useState} from 'react';


let Asteroid = () => {

let [randomTop,setRandomtop] = useState([]);
let [timer,setTimer] = useState(Date.now())
let ran = Math.floor(Math.random()*500)




useEffect(()=>{

    setInterval(() => {
        
        setTimer(Date.now()) 
    }, 10000);
},[])

useEffect(()=>{

        setInterval(() => {
            
            setTimer(Date.now()) 
        }, 10000);
    },[])

useEffect(()=>{

    setRandomtop(ran);
},[timer])


    
let AsteroidMove = styled.div`
position: relative;
    top: ${randomTop+'px'};
`


    return (
<AsteroidMove>

        <div className=' bg-asteroid  w-30 h-36  animate-astero-back bg-no-repeat '>
            MAKAREL
        </div>
</AsteroidMove>
    )
}

export default Asteroid
