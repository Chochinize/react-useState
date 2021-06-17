import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Select from 'react-select';





export const Countries = () => {
    const options = [
        {value: 'brazil',label:'Brazil'},
        {value: 'Spain',label:'Spain'},
        {value: 'Bulgaria',label:'Bulgaria'}
    ]
    const[country,setCountry] = useState([])
    const[land,setLand] = useState('Spain')
    
    const fetchData = () =>{
        return axios.get(`https://restcountries.eu/rest/v2/name/${land}`).then((res)=>{
        
            return res.data
            
          
        })
        
        .catch((err)=>{
            console.error(err);
        })
    }
    

    const changeHandleEvenet = (e) =>{
        setLand(e.value)
        
           
        
    }



useEffect(() => {
    fetchData().then(Apicountry=>{
        setCountry(Apicountry)
       
    });
    
    
}, [land])


    return (
        <>
            {country.map((place,cID)=><div className=' max-w-max bg-blue-300' key={cID}>  <p>Name:{place.name}</p> <p>Population:{place.population}</p> <p> Languages: {place.languages[0].name} </p> <img  className='w-40'src={place.flag}></img> <Select  onChange={(e)=>changeHandleEvenet(e)} options={options}/> </div>)}
          
      
           
        </>
    )
}
