import {useState} from 'react';
import BlogList from './BlogList.js';


const Bar = () => {
     
 const random = Array.from({length:5}, ()=>  '_' + Math.random().toString(36).substr(2, 9));



    const [blogs, setBlogs] = useState([ 
        {title: 'My new WEbsite', body: 'lorem', author:'Martin', id:random[0]},
        {title: 'My game', body: 'lorem', author:'Alex', id:random[1]},
        {title: 'My bloh', body: 'lorem', author:'Yolo', id:random[2]},
        
    ])

    
 

   // ############################################################################################
    return (
    <div className='home'>
        <BlogList />        
    </div>                   
    )
}

export default Bar
