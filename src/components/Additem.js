import React, { useState } from 'react'
import { db,auth } from '../Firebase'

export default function Additem() {
    const[input, setInput] = useState({
        text:'',
   
    });
    const[showInput, setShowInput] = useState(false)
       
        
      const handleChange = (event) => {
          const inputValue = event.target.value;
          console.log(inputValue);
           
          
          setInput({ text: inputValue })
          console.log('input',input.text);

      }  
      
      
      const{uid,displayName,email,photoURL} = auth.currentUser || {}
      const handleAdd = async () => {
          
           
        try {
           await db.collection('todos').add({
                todo: {
                    itemText: input.text,
                    authorId: uid,
                    user: {
                        uid,
                        displayName,
                        email,
                        photoURL

                    }
                }
            })

            setInput({text:''})

           
            
        } catch (error) {
            //create set error
            console.error("Error adding item", error);
            
            
        }
        
     
    }
    
    return (
        
        <div>
         
            <button className="addTodo" onClick={()=> setShowInput(true)} >Add todo</button>
            
            { showInput &&  <>  <label id="todoItem">Add an Item</label>
            <input type="text"
             name="todoItem"
             value={input.text} 
             placeholder="type here..."
             onChange={handleChange } />
             <button onClick={handleAdd} disabled = {input.text === 0}>Add</button>
             <button onClick={() => setShowInput(false)}>Cancel</button>  </>
               
          }
         

          
    

             
        </div>
      
    )
}
      