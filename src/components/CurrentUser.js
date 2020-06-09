import React from 'react';
import { useAuth } from '../Contexts/AuthContext'
import { StyledUser } from '../styled/StyledUser';

export default function CurrentUser({displayName,photoURL,email,children}) {
    const auth = useAuth();
  
    const { SignOut } = auth;
    return (
        <StyledUser>
            <div className="userDetails">
                {photoURL && <img src={photoURL} alt={displayName} />}
                <div >
                    <h2>{displayName}</h2>
                    <p>{email}</p>
                    <p>Created at</p>
                </div>
            </div>
            <div>
                <div>{children}</div>
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
