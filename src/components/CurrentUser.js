import React from 'react';
import { auth } from '../Firebase'

export default function CurrentUser({displayName,photoURL,email,children}) {

  
    
    return (
        <section>
            <div>
                {photoURL && <img src={photoURL} alt={displayName} />}
                <div>
                    <h2>{displayName}</h2>
                    <p>{email}</p>
                    <p>Created at</p>
                </div>
            </div>
            <div>
                <div>{children}</div>
                <button onClick={() => auth.signOut()}>Sign Out</button>
            </div>
            
        </section>
    )
}

CurrentUser.defaultProps = {
    displayName: 'Triv O',
    email: 'triv@gmail.com',
    photoURL: 'http://www.fillmurray.com/300/300',
    
}
