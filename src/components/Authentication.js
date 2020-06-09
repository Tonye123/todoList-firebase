import React from 'react'
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import SignInSignUp from './SignInSignUp';

export default function Authentication({user,loading}) {
   if(loading) return null; 
    
    return (
        <div>
            {user ? <CurrentUser {...user} /> : <SignInSignUp />}
        </div>
    )
}
