import React from 'react';
import styled from 'styled-components'
import TodoItems from './components/TodoItems';
import  GlobalStyle  from './styled/Global'

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
      <StyledDiv >
        <TodoItems />
      </StyledDiv>
    </>
  );
}

export default App;
