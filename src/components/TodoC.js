import React from 'react'

const TodoC = ({todo}) => {
    
    
    
    
    return (
        <div>
            <label>
            <input   type='checkbox'  checked={todo.complete} />
            {todo.name}
            </label>
        </div>
    )
}

export default TodoC
