import React, {useState, useEffect} from 'react'
import {db} from '../Firebase'
import { StyledDiv } from '../styled/StyledItems'
import Checkbox from '@material-ui/core/Checkbox';

export default function TodoItems() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    const [checked, setChecked] = useState(false);

  
    //connect to db and create/add to todos
    useEffect(() => {
        db.collection("todos").get().then((querySnapshot) => {
            const texts = querySnapshot.docs.map(doc => {return {id: doc.id, ...doc.data()}})
            setTodos(texts)
            
           
            
        });
  
       
    }, [])

    const handleAdd = () => {
        db.collection('todos').add({
            text: input
        }).catch(function (error) {
                console.error("Error adding document: ", error);
            });
        setInput('')
     
    }

    const handleChange = (event) => {
    setChecked(event.target.checked);
  };
   
    
    return (
        <StyledDiv>
            <button className="addTodo">Add todo</button>
            <label id="todoItem">Add an Item</label>
           
            <input type="text"
            name="todoItem"
             value={input} 
             placeholder="type todo"
             onChange={(e)=> setInput(e.target.value) } />
             <button onClick={handleAdd}>Add</button>
             <button>Cancel</button>
             <h2>Todo List</h2>
            {todos.length < 1 && <p>No items to display</p>}
            {todos.map(item=> (
                <li key={item.id}> <Checkbox
                checked={checked}
                onChange={handleChange}
               // color="primary"
                //inputProps={{ 'aria-label': 'primary checkbox' }}
            />{item.text}  <hr /></li>
                
            ))} 
           
            
        </StyledDiv>
    )
}
