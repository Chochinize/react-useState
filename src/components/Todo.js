import React  from 'react'
import {useState,useRef,useEffect} from 'react'
import TodoAdd from './TodoAdd'
import uuidv4 from './../../node_modules/uuid/dist/v4'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

console.log(LOCAL_STORAGE_KEY);
const Todo = () => {

    const [todos, setTodos] = useState([])
    const todoNameRef = useRef();
    

   useEffect(()=>{
       const storedTodos =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
       if(storedTodos) setTodos(storedTodos) 
   },[])

useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
},[todos])




    const handleClick = (e)=>{
        const name = todoNameRef.current.value
        if(name === '') return
        console.log(name);
        setTodos(prevTodos=>{
            return [...prevTodos, {id:uuidv4(),name, complete:true}]
        })
        todoNameRef.current.value = null
    }

    return (
        <div className=' justify-between lg:justify-between  text-sm md:text-large flex-wrap md:flex outline-none'>
<TodoAdd todosList={todos} />
<input ref={todoNameRef} type='text' className='outline-none'/>
<button onClick={handleClick} className='mx-10 px-4   bg-indigo-600 hover:text-white   '>Add To List</button>
<button>clear List</button>
<div>0 left to do</div>
        </div>
    )
}

export default Todo
