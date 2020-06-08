import React, {useState, useEffect, useContext} from 'react'
import {db} from '../Firebase'
import { StyledDiv } from '../styled/StyledItems'

import ListItem from './ListItem';
import Authentication from './Authentication';
import { auth } from '../Firebase';
import Additem from './Additem';

export default function ListItems({ todos, onAdd }) {
    console.log(todos)
   
   
    return (
        <StyledDiv>
            
            <Additem onAdd={onAdd} />
             <h2>Todo List</h2>
            {todos.length < 1 && <p>No items to display</p>}
            {todos.map(item => (
                <ListItem key={item.id} item={item} />
            ))}
            
        </StyledDiv>
    )
}
