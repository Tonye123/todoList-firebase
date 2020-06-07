import React, {useState, useEffect, useContext} from 'react'
import {db} from '../Firebase'
import { StyledDiv } from '../styled/StyledItems'

import ListItem from './ListItem';
import Authentication from './Authentication';
import { auth } from '../Firebase';

export default function TodoItems() {
    const [todos, setTodos] = useState({
        todoItems:[]
    
    });
    const [input, setInput] = useState('');
    const [showInput, setShowInput] = useState(false)
    const [user, setUser] = useState(null)
   
   
   

  
    //connect to db and create/add to todos
    useEffect(() => {
     
        
            const getData = async () => {
            try {
               
            let unsubscribeFromFirestore = db.collection('todos').onSnapshot( snapShot => {
                    const texts = snapShot.docs.map(doc => { return { id: doc.id, ...doc.data() } })
                    setTodos({todoItems:texts});
                })
            let unsubscribeFromAuth = auth.onAuthStateChanged(user => {
                    
                    setUser({user})
                    
                    
                })

                return () => {
                    unsubscribeFromFirestore();
                    unsubscribeFromAuth();
                }

            }
            
            catch (error) {
            console.error("Error fetching Data");
            
        }
    }
  
        getData();

       
       
    }, [])
    //create util folder for this function
    function collectId(doc) {
        return { id: doc.id, ...doc.data()}
    }

    const handleAdd = async () => {
        
        try {
           await db.collection('todos').add({
                text: input
            })

            setInput('');
            
        } catch (error) {
            //create set error
            console.error("Error adding item", error);
            
            
        }
     
    }


    console.log(user);
   
    return (
        <StyledDiv>
            <Authentication user={user} />
            <button className="addTodo" onClick={()=> setShowInput(true)} >Add todo</button>
           
           
            { showInput && 
            <>
            <label id="todoItem">Add an Item</label>
            <input type="text"
            name="todoItem"
             value={input} 
             placeholder="type here..."
             onChange={(e)=> setInput(e.target.value) } />
             <button onClick={handleAdd} disabled = {input.length === 0}>Add</button>
             <button onClick={() => setShowInput(false)}>Cancel</button></>}
             <h2>Todo List</h2>
            {todos.todoItems.length < 1 && <p>No items to display</p>}
            {todos.todoItems.map(item => (
                <ListItem key={item.id} item={item} />
            ))}
            
          

          
            
        </StyledDiv>
    )
}
