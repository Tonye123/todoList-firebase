import React, {useState, useEffect, useContext} from 'react'
import {db} from '../Firebase'
import { StyledDiv } from '../styled/StyledItems'
import {useTodos} from '../Contexts/todosContext';
import ListItem from './ListItem';

export default function TodoItems() {
    const [todos, setTodos] = useTodos();
    const [input, setInput] = useState('');
    const [showInput, setShowInput] = useState(false)
   
   
    

  
    //connect to db and create/add to todos
    useEffect(() => {
     
        
            const getData = async () => {
            try {
               
                let unsubscribe = db.collection('todos').onSnapshot( snapShot => {
                    const texts = snapShot.docs.map(doc => { return { id: doc.id, ...doc.data() } })
                    setTodos(texts);
                })

                return () => {
                    unsubscribe();
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


   
   
    return (
        <StyledDiv>
            <button className="addTodo" onClick={()=> setShowInput(true)} >Add todo</button>
           
           
            { showInput && 
            <>
            <label id="todoItem">Add an Item</label>
            <input type="text"
            name="todoItem"
             value={input} 
             placeholder="type todo"
             onChange={(e)=> setInput(e.target.value) } />
             <button onClick={handleAdd} disabled = {input.length === 0}>Add</button>
             <button onClick={() => setShowInput(false)}>Cancel</button></>}
             <h2>Todo List</h2>
            {todos.length < 1 && <p>No items to display</p>}
            {todos.map(item => (
                <ListItem key={item.id} item={item} />
            ))}
            
          

           
            
        </StyledDiv>
    )
}
