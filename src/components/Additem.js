import React, { useState } from 'react'

export default function Additem({onAdd}) {
    const[input, setInput] = useState('');
    const[showInput, setShowInput] = useState(false)

    return (
        <div>
            <button className="addTodo" onClick={()=> setShowInput(true)} >Add todo</button>
            <label id="todoItem">Add an Item</label>
            <input type="text"
            name="todoItem"
             value={input} 
             placeholder="type here..."
             onChange={(e)=> setInput(e.target.value) } />
             <button onClick={() => onAdd(input)} disabled = {input.length === 0}>Add</button>
             <button onClick={() => setShowInput(false)}>Cancel</button>
        </div>
    )
}
