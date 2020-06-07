import React from 'react';
import styled from 'styled-components'
import TodoItems from './components/ListItems';
import  GlobalStyle  from './styled/Global'
import { TodosProvider } from './Contexts/todosContext';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  background: #f9f9f9;
  min-height: 100vh;

`

function App() {
  
  return (
    <>
      <GlobalStyle />
      <TodosProvider>
        <StyledDiv >
          <TodoItems />
        </StyledDiv>
      </TodosProvider>
    </>
  );
}

export default App;
