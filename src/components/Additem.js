import React, { useState } from 'react';
import { db,auth } from '../Firebase';
import { StyledAddItem } from '../styled/StyledAddItem';

export default function Additem() {
    const[input, setInput] = useState({
        text:'',
   
    });
    const[showInput, setShowInput] = useState(false)
       
        
      const handleChange = (event) => {
          const inputValue = event.target.value;
          
           
          
          setInput({ text: inputValue })
          

      }  
      
      
      const{uid,displayName,email,photoURL} = auth.currentUser || {}
      const handleAdd = async () => {
          
           
        try {
           await db.collection('newUserData').doc(uid).collection('lists').add({
                todo: {
                    itemText: input.text,
                    
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
            
            console.error("Error adding item", error);
            
            
        }
        
     
    }
    
    return (
        
        <StyledAddItem>
         
            <button className="addTodo" onClick={()=> setShowInput(true)} >Add todo</button>
            
            { showInput &&  <>  <label id="todoItem">Add an Item</label>
            <input type="text"
             name="todoItem"
             value={input.text} 
             placeholder="type here..."
             onChange={handleChange } />
             <button onClick={handleAdd} disabled = {input.text.length < 4}>Add</button>
             <button onClick={() => setShowInput(false)}>Cancel</button>  </>
               
          }
         

          
    

             
        </StyledAddItem>
      
    )
}
      