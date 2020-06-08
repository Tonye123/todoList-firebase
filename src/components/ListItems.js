import React from 'react'
import { StyledDiv } from '../styled/StyledItems'
import ListItem from './ListItem';
import Additem from './Additem';

export default function ListItems({ todos }) {
   
    return (
        <StyledDiv>
            
            <Additem />
             <h2>Todo List</h2>
            {todos.length < 1 && <p>No items to display</p>}
            {todos.map(item => (
                <ListItem key={item.id} item={item} />
            ))}
            
        </StyledDiv>
    )
}
