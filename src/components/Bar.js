import {useState,useEffect} from 'react';
import BlogList from './BlogList.js';
import useFetch from './useFetch.js';

const Bar = () => {
const {data: blogs ,isPendeing,error} = useFetch('http://localhost:8000/blogs');

    return (
    <div className='home'>
        {error && <div>{error} </div>}
        {isPendeing && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title='All Blogs'/>}           
    </div>                   
    )
}

export default Bar
