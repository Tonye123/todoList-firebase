import React from 'react';
import styled from 'styled-components'
import ListItems from './components/ListItems';
import  GlobalStyle  from './styled/Global'
import Authentication from './components/Authentication';
import { Switch, Route} from 'react-router-dom';
import UserProfile from './components/UserProfile';
import { useAuth } from './Contexts/AuthContext';
import SignIn from './components/SignIn';
import Header from './components/Header';







const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
  min-height: 100vh;

`

function App() {
 
   
    //create util folder for this function
    function collectId(doc) {
        return { id: doc.id, ...doc.data()}
    }



  return (
    <>
      <GlobalStyle />
      <Header />
        <StyledDiv >
          
         
          <Switch>
            
             <Route path = "/signin" component={SignIn} /> 
             <PrivateRoute path="/userprofile" component={UserProfile} />
            <PrivateRoute  path="/" component={ListItems} />
           
            

          </Switch>
        </StyledDiv>
     
    </>
  );
}

const PrivateRoute = ({ component, ...options }) => {
  
  
  const auth = useAuth();
  const {user} = auth;
  const finalComponent = user ? component : SignIn;

  return <Route {...options} component={finalComponent} />;
};



export default App;
