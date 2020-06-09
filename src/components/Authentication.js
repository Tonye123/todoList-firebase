import React from 'react'
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import SignInSignUp from './SignInSignUp';
import { useAuth } from '../Contexts/AuthContext';


export default function Authentication() {
   const auth = useAuth()
    const {user} = auth
    return (
        <div>
            {user ? <CurrentUser {...user} /> : <SignInSignUp />}
        </div>
    )
}
