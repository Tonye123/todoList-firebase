import React from 'react'
import HomePage from '../components/HomePage'
import { useAuth } from '../Contexts/AuthContext';


export default function Authentication() {
   const auth = useAuth()
    const {user} = auth

    
    return (
        <div>
            {user ? <HomePage /> : <h2>Loading....</h2>}

            

        </div>
    )
}
