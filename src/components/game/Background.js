import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Player from './Player'
import Asteroid from './Asteroid'
import useRef from 'react'
import Missle from './Missle'
const Background = () => {



    
    return (
        <div className='min-h-screen justify-center bg-hero-pattern bg-repeat overflow-hidden animate-ltr-linear-infinite'>

                
               <Asteroid />
            <Player />
      
        </div>
    )


}

export default Background


