import React from "react";
import TodoC from "./TodoC";


const TodoAdd = ({todosList}) => {

   
    return (
        

              todosList.map(todo =>{
                  return <TodoC key={todo.id}  todo={todo}/>
              })
        
    )
}

export default TodoAdd
