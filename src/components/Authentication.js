import React from 'react'
import SignIn from './SignIn';
import { useAuth } from '../Contexts/AuthContext';
import ListItems from '../components/ListItems';


export default function Authentication() {
   const auth = useAuth()
    const {user} = auth
    return (
        <div>
            {/* {user ? <ListItems /> : <SignIn />} */}

            <h2>Me auth</h2>
        </div>
    )
}
