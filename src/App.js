import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import ListItems from './components/ListItems';
import  GlobalStyle  from './styled/Global'
import {db,auth} from './Firebase'
import Authentication from './components/Authentication';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  background: #f9f9f9;
  min-height: 100vh;

`

function App() {
  const[todos,setTodos] = useState({
    todoItems:[],
    user: null,
  });

  const handleAdd = async (todo) => {
        
        try {
           await db.collection('todos').add({
                text: todo
            })

           
            
        } catch (error) {
            //create set error
            console.error("Error adding item", error);
            
            
        }
     
    }

    //connect to db and create/add to todos
    useEffect(() => {
     
        
            const getData = async () => {
            try {
               
            let unsubscribeFromFirestore =  db.collection('todos').onSnapshot( snapShot => {
                    const texts = snapShot.docs.map(doc => { return { id: doc.id, ...doc.data() } })
                    setTodos({todoItems:texts,...todos});
                    
                })
             let unsubscribeFromAuth =  auth.onAuthStateChanged(userAuth => {
                    
                    setTodos({...todos,user:userAuth})
                   
                    
                    
                })

                return () => {
                    unsubscribeFromFirestore();
                    unsubscribeFromAuth();
                }

            }
            
            catch (error) {
            console.error("Error fetching Data",error);
            
        }
    }
  
        getData();

       
       
    }, [])
    //create util folder for this function
    function collectId(doc) {
        return { id: doc.id, ...doc.data()}
    }

    
    console.log(todos)

    const {todoItems, user} = todos
  
  return (
    <>
      <GlobalStyle />
    
        <StyledDiv >
          <h1>To-Do List</h1>
          <Authentication user={user} />
          <ListItems todos={todoItems} onAdd={handleAdd} />
        </StyledDiv>
     
    </>
  );
}

export default App;
