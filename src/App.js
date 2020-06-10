import React from 'react';
import styled from 'styled-components'
import ListItems from './components/ListItems';
import  GlobalStyle  from './styled/Global'
import Authentication from './components/Authentication';
import { Switch, Route, Link} from 'react-router-dom';
import { useTodos } from './Contexts/TodosContext';
import UserProfile from './components/UserProfile'




const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
  min-height: 100vh;

`

function App() {
 
  
  const [todos] = useTodos();

  

  console.log(todos);
  
   
    //create util folder for this function
    function collectId(doc) {
        return { id: doc.id, ...doc.data()}
    }

  return (
    <>
      <GlobalStyle />
    
        <StyledDiv >
        <Link to="/">  <h1>To-Do List</h1> </Link>
          <Authentication />
          <Switch>
            <Route exact path="/" component={ListItems} />
            <Route exact path="/userprofile" component={UserProfile} />
          </Switch>
        </StyledDiv>
     
    </>
  );
}

export default App;
