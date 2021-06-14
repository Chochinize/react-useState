import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Calc from './Calculations.js';
import Resize from './Resize';
import HashOne from './Styling';
import Todo from './Todo.js';


const PageContainer = styled.header`
${tw`
    
    grid
    grid-cols-12
    grid-rows-3
    w-1/2
    bg-green-200 
    p-10
    shadow-2xl
    
    
    
    m-auto
    
    
`}
`;
export const  Frame = () => {
    return <PageContainer>
            <HashOne>
                    <Resize/>
                    <Calc />
                    <Todo/>
            </HashOne>
            
           

            
            
                
    </PageContainer>
}