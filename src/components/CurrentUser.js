import React from 'react';
import { useAuth } from '../Contexts/AuthContext'
import { StyledUser } from '../styled/StyledUser';
import { Link } from 'react-router-dom';
import defaultImage from '../images/defaultPhoto.png'


export default function CurrentUser({displayName,photoURL,email}) {
    const auth = useAuth();
   
    
    

  
    const { SignOut,user } = auth;
    
    
    
    return (
        <StyledUser>
            <div className="userDetails">
                {user.photoURL ? <img src={user.photoURL} alt={user.displayName} />
                : <img src={defaultImage} alt="default avatar" />}
                <div >
                   <Link to="/userprofile"> <h2>{user.displayName}</h2></Link>
                    <p>{user.email}</p>
                    <p>Created at</p>
                </div>
            </div>
            <div>
                <div></div>
                <button onClick={SignOut}>Sign Out</button>
            </div>
            
        </StyledUser>
    )
}

CurrentUser.defaultProps = {
    displayName: 'Triv O',
    email: 'triv@gmail.com',
    photoURL: 'http://www.fillmurray.com/300/300',
    
}
