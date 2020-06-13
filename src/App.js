import React from 'react';
import styled from 'styled-components';
import  GlobalStyle  from './styled/Global';
import { Switch, Route, Redirect} from 'react-router-dom';
import UserProfile from './components/UserProfile';
import { useAuth } from './Contexts/AuthContext';
import SignIn from './components/SignIn';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';







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
            <Route exact path="/signup" component={SignUp} /> 
             <PrivateRoute path="/userprofile" component={UserProfile} />
            <PrivateRoute exact path="/" component={HomePage} />
            
           
            

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
