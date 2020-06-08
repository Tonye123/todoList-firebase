import React, { useState } from 'react'
import { db } from '../Firebase'

export default function Additem({onAdd}) {
    const[input, setInput] = useState('');
    const[showInput, setShowInput] = useState(false)

      const handleAdd = async () => {
        
        try {
           await db.collection('todos').add({
                text: input
            })

           
            
        } catch (error) {
            //create set error
            console.error("Error adding item", error);
            
            
        }
        setInput('')
     
    }

    return (
        <div>
            <button className="addTodo" onClick={()=> setShowInput(true)} >Add todo</button>
            <label id="todoItem">Add an Item</label>
            <input type="text"
            name="todoItem"
             value={input} 
             placeholder="type here..."
             onChange={(e)=> setInput(e.target.value) } />
             <button onClick={handleAdd} disabled = {input.length === 0}>Add</button>
             <button onClick={() => setShowInput(false)}>Cancel</button>
        </div>
    )
}
