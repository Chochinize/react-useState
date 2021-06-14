import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import {useState,useEffect} from 'react'




const CalculatorStyle = styled.div`
${tw`
rounded-3xl
w-3/4
m-auto
bg-black
text-white
h-full
text-white
font-player2
text-2xl
hover:bg-white 
hover:text-black

break-all
    
`}
`





        const Calc = () => {

            const [code, setCode] = useState(null)
            const [print, setPrint] = useState(false)
            useEffect(()=>{
            setCode('BB')
            },[])

            const getData = (val) =>{
        
                setCode(val.target.value)   
                setPrint(false);     
                console.log(val.target.value);
            }
        
            return (
        <div>
                    <input type='text' onChange={getData}></input>
                <CalculatorStyle onClick={()=>setPrint(true)}>
                    <h1>Generator</h1>
                    </CalculatorStyle>                    


                    {
                        print?
                        <h2 className='relative'>{code}</h2>
                        : null
                        }
                        
                        
        </div>                
                
            )
        }
        
        export default Calc
        






