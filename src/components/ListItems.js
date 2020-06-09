import React from 'react'
import { StyledDiv } from '../styled/StyledItems'
import ListItem from './ListItem';
import Additem from './Additem';
import { useTodos } from '../Contexts/TodosContext'

export default function ListItems() {
    const [todos] = useTodos()
    
    const {todoItems} = todos;
    
   
   
    
   
    return (
        <StyledDiv>
            
            <Additem />
             <h2>Todo List</h2>
             <div>
            {todoItems.length < 1 && <p>No items to display</p>}
            {todoItems.map(item => (
                
                <ListItem key={item.id} item={item} />
                
                
            ))}
            </div>
            
        </StyledDiv>
    )
}
