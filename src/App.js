import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import ListItems from './components/ListItems';
import  GlobalStyle  from './styled/Global'
import {db} from './Firebase'
import Authentication from './components/Authentication';
import {useAuth} from './Contexts/AuthContext'


const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  background: #f9f9f9;
  min-height: 100vh;

`

function App() {
  const[todos,setTodos] = useState({
    todoItems:[],
  });
  const auth = useAuth();

  


    //connect to db and create/add to todos
    useEffect(() => {
     
        
            const getData = async () => {
            try {
               
            let unsubscribeFromFirestore =  db.collection('todos').onSnapshot( snapShot => {
                    const texts = snapShot.docs.map(doc => { return { id: doc.id, ...doc.data() } })
                    setTodos({todoItems:texts});
                   
                    
                    
                })
       

                return () => {
                    unsubscribeFromFirestore();
                
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

    
   

    const {todoItems} = todos;
    const {user} = auth;
  return (
    <>
      <GlobalStyle />
    
        <StyledDiv >
          <h1>To-Do List</h1>
          <Authentication user={user} />
          <ListItems todos={todoItems} />
        </StyledDiv>
     
    </>
  );
}

export default App;
