import React, { useState,useEffect } from 'react'
import tw from 'twin.macro'
import Avatart from './../../images/spaceship.png'
import styled from 'styled-components'
import Missle from './Missle';


 const   Player  = () => {
  



const [moveY,setMoveY]=useState(5)
const [moveX,setMoveX]=useState(5)
const [shoot,setShoot]=useState(false);







let moveByY = 0;
let moveByX = 0;
let missle = 0;

const handleKeyDown = (event) => {
    if(event.keyCode === 38|| event.keyCode === 87){
        moveByY-=20; 
        
    } if (event.keyCode === 40 || event.keyCode ===83){
        moveByY+=20
    }
     if(event.keyCode === 39){
        moveByX+=20
    }
     if(event.keyCode === 37){
        moveByX-=20
    }
    if(event.keyCode === 32){
        
        setShoot(true)
        
    }

    
    setMoveX(moveByX)
    setMoveY(moveByY)

    // console.log('A key was pressed', event.keyCode);
  };


    useEffect(()=>{
        window.addEventListener('keydown',handleKeyDown)
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
          };
    },[])


    


        const Space = styled.img`
        position: absolute;
        width: 150px;
        height: 100px;
       
    `;


        
        
    const Move = styled.div`
        top: ${moveY+'px'};
        left: ${moveX+'px'};
    ${tw`
        w-32
        h-24
        relative

    `}
    `
   
        
        
        return (
            <div>

                <div>
                    <img src={missle} alt="" />
                </div>
                <Move>
                <Space src={Avatart}/>

                <Missle />
               
                </Move>
            </div>
        )
    


   


}
export default Player