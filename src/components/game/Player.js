import React, { useState,useEffect } from 'react'
import tw from 'twin.macro'
import Avatart from './../../images/spaceship.png'
import styled from 'styled-components'




 const   Player  = () => {
  



const [move,setMove]=useState(5)




let moveBy = 0;
const handleKeyDown = (event) => {
    if(event.keyCode === 38|| event.keyCode === 87){
        
       moveBy-=20; 
    }else if (event.keyCode === 40 || event.keyCode ===83){
        moveBy+=20
    }
    setMove(moveBy)
    // console.log('A key was pressed', event.keyCode);
  };


    useEffect(()=>{
        window.addEventListener('keydown',handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
          };
    },[])


    


        const Space = styled.img`
        position: relative;
        width: 150px;
        height: 100px;
       
    `;

    
        
        
    const Move = styled.div`
        top: ${move+'px'};
    ${tw`
        w-32
        h-24
        relative

    `}
    `
        
        
        
        return (
            <div>

                <Move>

                <Space src={Avatart}/>
               
            
                </Move>
            </div>
        )
    


   


}
export default Player