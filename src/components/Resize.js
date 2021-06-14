import React from 'react' 
import {useState,useEffect} from 'react'

const Resize = () => {
    const [windowWidth,setWindowWidth] = useState(window.innerWidth)

    
    const handleResize = () =>{
        setWindowWidth(window.innerWidth)
    }
    
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize',handleResize);
        }
    }, [])
    
    return (
        <div className='text-xs'>
            innerWidth: 
        {windowWidth}px
        </div>
    )
}

export default Resize
