import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Player from './Player'
import Asteroid from './Asteroid'

const Background = () => {


    
    return (
        <div className='min-h-screen justify-center bg-hero-pattern bg-repeat animate-ltr-linear-infinite'>
            <Player />
            
           <Asteroid />
           <Asteroid />
        </div>
    )


}

export default Background


